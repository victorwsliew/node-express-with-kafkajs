const config = require('./config');
const { Kafka } = require('kafkajs')

module.exports = new Kafka(config.kafka.server)

