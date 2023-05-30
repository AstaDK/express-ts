# Express TS

<b>This is base project setup Express with Typescript - you can use docker and docker compose to run local or production mode</b>

## How to start

1. Install dependencies

```bash
$ yarn add
```

2. Copy and config file .env

```bash
$ cp .env-example .env
```

### Start without docker

```bash
$ yarn serve
```

### Start with docker

```bash
$ docker-compose up
```

### Start with docker - mode production

```bash
$ docker-compose -f docker-compose.prod.yml up
```

<i>Connect to manage database<i>: http://localhost:8100/?pgsql=db&username=postgres&db=dev

### Update to use mongodb - coming soon
