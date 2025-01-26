## DAY 1 

## DATE 24 JAN 2025

Install nodemon 
Created nodemon.json

```
    {
        "watch": ["src"],
        "ext": "js,json",
        "ignore": ["node_modules"],
        "exec": "node src/index.js"
    }
```
Run main file index file by `nodemon`

Install `express mongoose dotenv`


## DAY 2

## DATE 25 JAN 2025

Refactor files 
  - docker-composer 
  - index

First, to reflect changes made in the file must get reflected in the container's dir `:/usr/src/app` for that we use 
volume
```
    volumes:
      - .:/usr/src/app
```
however, in dev mode we want auto restart system, for that we have to run nodemon using docker by overriding command

```
    command: npm run dev
```

Also, keep db credentials in the .env file


To run mongo inside from the container

1. docker exec -it mongo bash
2. run mongoose: mongosh -u root -p example --authenticationDatabase admin
3. show collections //Cmd: for listing collections
4. db.products.find() // list documents of a particular collection


Also, new routes are added for CRUD operation on product document

Besides, custom functions can also added in the model as shown below 
```}, {
    statics: {
        findByName(name) {
            return this.find({ name: name });
        }
    }
```


## DAY 3

## DATE 26 JAN 2025

Support registering users
Use jsonwebtoken for authentication and information exchange


Use Argon2 hashing algorithm for storing password.

Also, use pre save hooks to save hashed password.

Note: to remove all records in mongodb `db.users.remove({})`






