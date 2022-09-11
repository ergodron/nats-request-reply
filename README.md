<br />
<div align="center">
  <img src="logo.png" alt="Logo" width="100" height="100">

  <h3 align="center">Request-Reply - NATS</h3>

  <p align="center">
    	Обмен данными между микросервисами
    <br />
  </p>
</div>

## О проекте

Микросервис api, основная задача которого - принимать запросы от клиента и направлять их в микросервис storage с помощью системы обмена сообщениями NATS.

Микросервис storage, основная задача которого - принимать запросы от микросервиса api и вызывать соответствующие методы репозитория.

### Установка

Склонируйте репозиторий и перейдите в него

```
git clone https://github.com/ergodron/nats-request-reply.git
cd nats-request-reply
```

### Запуск и остановка контейнера

Для запуска выполните:

```
docker-compose up
```

Для остановки выполните:

```
docker-compose down
```

### Сваггер

Сваггер доступен по этому адресу:

```
http://localhost:3001/documentation
```

### Стек технологий

- [Node.js](https://nodejs.org)
- [Typescript](https://www.typescriptlang.org)
- [NATS](https://nats.io/)
- [TypeORM](https://typeorm.io/)
- [Postgersql](https://www.postgresql.org/)
- [Docker](https://www.docker.com)
