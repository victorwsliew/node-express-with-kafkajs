# yippi-event-hub

> yippi hub connect with kafka

## Build Setup

```bash
# install dependencies
$ npm install

### create .env file

$ cp .env.example .env

### update variables in .env
# kafka client id not really important can leave blank
#KAFKA_CLIENT_ID=

# kafka url with delimiter '|'
#KAFKA_BROKER_LIST = kafka_url|kafka_url_1

```
## Serve with NPM

```bash
### take note of env [KAFKA_BROKER_LIST]
$ npm run serve

```
## Serve with Docker Compose

```bash
### take note of env [KAFKA_BROKER_LIST]
$ docker-compose up -d

```
## Serve with Docker Compose (Laradock)

```bash
### take note of naming of laradock backend network
$ docker-compose -f docker-compose-laradock.yml up -d

```

