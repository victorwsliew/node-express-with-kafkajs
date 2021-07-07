let consumerHandler = async ({ message }) => {
    await console.log({
        yunxin1: message.value.toString(),
    })
};

const handler = {
    topic: 'yunxin-topics',
    handle: consumerHandler
}

module.exports = handler