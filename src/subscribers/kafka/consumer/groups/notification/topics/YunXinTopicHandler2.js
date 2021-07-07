let consumerHandler = async ({ message }) => {
    await console.log({
        yunxin2: message.value.toString(),
    })
};

const handler = {
    topic: 'yunxin-topics-2',
    handle: consumerHandler
}

module.exports = handler