const yunxin = require('./topics/YunXinTopicHandler')
const yunxin2 = require('./topics/YunXinTopicHandler2')

module.exports = {
    groupId: 'notification-group',
    topicHandlers: [
        yunxin,
        yunxin2
    ]
}