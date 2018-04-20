# 2018-04-15: App Node con TypeScript, usando MySQL
## Basado en: 
- Hacker Noon - [Tutorial: Setting up Node.js with a database](https://hackernoon.com/setting-up-node-js-with-a-database-part-1-3f2461bdd77f)
- [Knex](http://knexjs.org/) es un constructor de queries SQL. trabaja con varias BBDD relacionales.

## Versiones:
**0.0.3:** (2018-04-19) Practicamente una copia de la fuente proporcionada. Algunas modificaciones para adaptarlo a TypeScript. Las versiones anteriores a esta fueron intentos fallidos de usar TypeScript y ordernar el contenido en una forma más estricta. 
*Carpeta migrations:* es creación de **knex**, se usa knex para crear y migrar datos de la base de datos.

## Indicaciones
Seguir las indicaciones del tutorial. Se requiere tener instalado MySQL y crear una base de datos con su tabla, revisar el archivo *knexfile.js* para conocer los datos usados y cambiarlos por los que vaya a usar en su prueba.

### Base de datos
La estructura final de la BBDD es como sigue, más no es necesario crearla manualmente. Esta se crea usando **knex**

|id|username|salt|encrypted_password|
|:-:|:------:|:--:|:----------------:|


## Instalación:
```
npm install
```
De preferencia instalar globalmente a knex para poder ejecutarlo desde la consola.
```
npm -g install knex
```

## Ejecución:
```
npm start
```
