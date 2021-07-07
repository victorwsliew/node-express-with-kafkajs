module.exports = async ({ kafkaClient, config, consumerGroup }) => {
    let consumerGroupId = consumerGroup.groupId ?? config.kafka.consumer.groupId;
    let consumer = kafkaClient.consumer({ groupId: consumerGroupId });
    let handlers = consumerGroup.topicHandlers;
    
    await consumer.connect();

    handlers.forEach(async (handler) => {
        await consumer.subscribe({ topic: handler.topic, fromBeginning: true });
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            let handler = handlers.filter(handler => {
                return handler.topic === topic
            });

            await handler[0].handle({ message })
        },
    });

    return consumer;
};

