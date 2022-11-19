# _Comandos sequelize-cli para modelos y migraciones_

### _Inicializar sequelize en el proyecto_

```
npx sequelize-cli init
```

### _Crear db si no existe_

```
npx sequelize-cli db:create
```

### _Crear un modelo y su migracion_

```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string,avatar:string,roleId:integer
```

### _Llamar a la migración para crear tabla en db_

```
npx sequelize-cli db:migrate
```
