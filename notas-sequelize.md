# *Comandos sequelize-cli para modelos y migraciones*

### *Inicializar sequelize en el proyecto*
```
npx sequelize-cli init
```

### *Crear db si no existe*
```
npx sequelize-cli db:create
```

### *Crear un modelo y su migracion*
```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string,avatar:string,roleId:integer
```

### *Llamar a la migración para crear tabla en db*
```
npx sequelize-cli db:migrate
```