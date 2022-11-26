
# Api para login con express

Este es un repositorio que sirve como guía para poder generar una api destinada al registro y login con Node js y express.

## Instalación

Instalar con npm

```bash
  npm install 
  sequelize db:create
  sequelize db:migrate
```
    
## 🛠 Tecnologias utilizadas
Node js, express js, JWT, multer, cloudinary, bcryptjs, sequelize, express-validator


## Endpoints de usuarios
#### Obtener todos los usuarios

```http
  GET /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API key |

#### Obtener un usuario

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del usuario |
| `api_key` | `string` | **Required**. API key |

#### Crear un usuario

```http
  POST /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `string` | **Required**. Nombre |
| `lastName` | `string` | **Required**. Apellido |
| `email`      | `string` | **Required**. Email |
| `password` | `string` | **Required**. Password |
| `roleId`      | `int` | **Required**. Role id |
| `api_key` | `string` | **Required**. API key |

#### Editar un usuario

```http
  PUT /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. API key |

#### Eliminar un usuario

```http
  DELETE /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. API key |

## Endpoint de imagenes
#### Crear o editar avatar de usuarios

```http
  POST /api/upload/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API key |
| `id` | `string` | **Required**. id de usuario |
| `avatar` | `file` | **Required**. imagen |

## Endpoint para autenticación
#### Login

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. email de usuario |
| `password` | `string` | **Required**. password de usuario |

#### Register

```http
  POST /api/auth/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `string` | **Required**. nombre |
| `lastName` | `string` | **Required**. apellido |
| `email`      | `string` | **Required**. email |
| `password` | `string` | **Required**. password |
| `roleId`      | `int` | **Required**. role id del usuario |

## Authors

- [Adrian gonzalez](https://www.linkedin.com/in/adrian-edgar-gonzalez/)

