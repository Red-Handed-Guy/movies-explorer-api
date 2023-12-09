
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

NodeJS, ExpressJS, MongoDB


## Demo

Ссылка на рабочий сайт: https://red-movies.nomoredomainsrocks.ru

Ссылка на Api: https://api.red-movies.nomoredomainsrocks.ru


## Related

[Frontend](https://github.com/Red-Handed-Guy/movies-explorer-frontend) часть приложения

[beatfilm-movies Api](https://api.nomoreparties.co/beatfilm-movies) 


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
