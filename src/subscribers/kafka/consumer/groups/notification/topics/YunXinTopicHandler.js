let consumerHandler = async ({ message }) => {
    await console.log({
        yunxin: message.value.toString(),
    })
};

const handler = {
    topic: 'yunxin-topics',
    handle: consumerHandler
}

module.exports = handler