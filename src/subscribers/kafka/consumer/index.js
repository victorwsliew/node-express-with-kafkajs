const createConsumer = require('./commonConsumer');
const notificationGroup = require('./groups/notification');

const consumerGroups = [
    notificationGroup
]

module.exports = async ({ kafkaClient, config }) => {
    consumerGroups.forEach(async (consumerGroup) => {
        await createConsumer({ kafkaClient, config, consumerGroup });
    });
};