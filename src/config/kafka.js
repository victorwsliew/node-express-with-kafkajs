let brokerList = process.env.KAFKA_BROKER_LIST

const config = {
    server: {
        clientId: process.env.KAFKA_CLIENT_ID,
        brokers: brokerList.split('|')
    },
    consumer: { 
        groupId: process.env.KAFKA_GROUP_ID
    }
}

module.exports = config