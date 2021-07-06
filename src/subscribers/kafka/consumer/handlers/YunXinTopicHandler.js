let consumerHandler = async ({ message }) => {
    await console.log({
        value: message.value.toString(),
    })
};

const handler = {
    groupId: 'notification-group',
    topic: 'yunxin-topics',
    handle: consumerHandler
}

module.exports = handler