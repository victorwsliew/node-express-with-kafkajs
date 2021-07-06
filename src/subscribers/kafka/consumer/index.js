const createConsumer = require('./commonConsumer');
const yunxin = require('./handlers/YunXinTopicHandler')

const topicHandlers = [
    yunxin
]

module.exports = async ({ kafkaClient, config }) => {
    topicHandlers.forEach(async (consumerHandler) => {
        await createConsumer({ kafkaClient, config, consumerHandler });
    });
};