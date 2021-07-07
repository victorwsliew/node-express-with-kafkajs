const createConsumer = require('./commonConsumer');
const yunxin = require('./handlers/YunXinTopicHandler')
const yunxin2 = require('./handlers/YunXinTopicHandler2')

const consumerGroups = [
    {
        groupId : 'notification-group',
        topicHandlers : [
            yunxin,
            yunxin2
        ]
    }
]

module.exports = async ({ kafkaClient, config }) => {
    consumerGroups.forEach(async (consumerGroup) => {
        await createConsumer({ kafkaClient, config, consumerGroup });
    });
};