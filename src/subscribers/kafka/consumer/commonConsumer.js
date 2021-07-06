module.exports = async ({ kafkaClient, config, consumerHandler }) => {
    let consumerGroupId = consumerHandler.groupId ?? config.kafka.consumer.groupId;
    let consumer = kafkaClient.consumer({ groupId: consumerGroupId });

    await consumer.connect();
    await consumer.subscribe({ topic: consumerHandler.topic, fromBeginning: true });
    
    await consumer.run({
        eachMessage: async ({ message }) => {
            await consumerHandler.handle({ message })
        },
    });

    return consumer;
};

