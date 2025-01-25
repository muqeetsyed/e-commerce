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





