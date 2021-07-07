const yunxin = require('./topics/YunXinTopicHandler')

module.exports = {
    groupId: 'notification-group',
    topicHandlers: [
        yunxin
    ]
}