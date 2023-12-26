
# Дипломная работа "Movies app" Яндекс.Практикум (backend)

Задача bakend части дипломной работы заключалась в создании api для регистрации/авторизации пользователей, хранении/удалении сохраненных фильмов.


## Features

- Создание/проверка индивидуального токена
- Работа с NoSQL БД
- Хранение зашифрованного пароля и данных пользователя
- Валидация Api запросов
- Сохранение/удаление фильмов и пользователей в/из БД
- Регистрация/Авторизация


## Tech Stack

![Static Badge](https://img.shields.io/badge/Node.js-teal?style=for-the-badge&logo=Node.js&logoColor=%2302DC02&color=%23F7F7F7)
![Static Badge](https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=Express&logoColor=%23fff&color=%23EFD81D)
![Static Badge](https://img.shields.io/badge/MongoDB-teal?style=for-the-badge&logo=MongoDB&logoColor=%2300ED64&color=%23001E2B)


## Demo

Ссылка на рабочий сайт: https://red-movies.nomoredomainsrocks.ru

Ссылка на Api: https://api.red-movies.nomoredomainsrocks.ru


## Related

[Frontend](https://github.com/Red-Handed-Guy/movies-explorer-frontend) часть приложения

[beatfilm-movies Api](https://api.nomoreparties.co/beatfilm-movies) 


## Deployment

Работает с версиями `NodeJS v20.10.0` и `npm 10.2.3`


1) Для корректной работы серера необходимо установить [MongoDB](https://mongodb.prakticum-team.ru/try/download/community-kubernetes-operator) версии 4.4.27
2) Скачать архив с ветки Main
3) Разархивировать в любую папку
4) С помощью терминала git перейти в эту папку

5) Установить зависимости командой
```bash
  npm ci
```
6) Запустить командой
```bash
  npm run start
```
7) Запустить MongoDB 
8) Сервер по-умолчанию будет работать на 3000 порту и будет принимать запросы с адреса `http://127.0.0.1:3001`


## API Reference

#### Get user data

```http
  GET /users/me
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user._id` | `cookies/string` | **Required**. Your cookies token |

#### Patch user data

```http
  PATCH /users/me
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user._id` | `cookies` | **Required**. Your cookies token |
| `name` | `string` | **Required**. **min(2)**. **max(30)**. Your user name |
| `email` | `string` | **Required**. **Email**. Your email |

#### Get saved movies

```http
  GET /movies
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user._id` | `cookies/string` | **Required**. Your cookies token |

#### Save movie

```http
  POST /movies
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user._id` | `cookies/string` | **Required**. Your cookies token |
| `country` | `string` | **Required**.|
| `director` | `string` | **Required**.|
| `year` | `string` | **Required**.|
| `description` | `string` | **Required**.|
| `image` | `string` | **Required**. **URL**.|
| `trailerLink` | `string`  | **Required**. **URL**.|
| `nameRU` | `string` | **Required**.|
| `nameEN` | `string` | **Required**.|
| `thumbnail` | `string` | **Required**. **URL**.|
| `duration` | `number` | **Required**.|
| `movieId` | `number` | **Required**.|

#### Delete movie

```http
  DELETE /movies/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user._id` | `cookies/string` | **Required**. Your cookies token |
| `_id` | `string` | **Required**. **Length(24)**. **Hex** Movie Id|


#### Sign in

```http
  POST /signin
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. **min(2)**. **max(30)**. Your user name |
| `email` | `string` | **Required**. **Email**. Your email |
| `password` | `string` | **Required**. Your password |

#### Sign up
```http
  POST /signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. **Email**. Your email |
| `password` | `string` | **Required**. Your password |

#### Sign out
```http
  POST /signout
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user._id` | `cookies/string` | **Required**. Your cookies token |
