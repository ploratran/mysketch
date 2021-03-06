# Authentication Microservice

This microservice is responsible for authentication and authorization of the application.

## How to run server locally:

```
npm install
npm run dev
```

## API Endpoints:

| **Method** | **endpoint**                                 | **function**       |
| ---------- | -------------------------------------------- | ------------------ |
| **POST**   | http://localhost:5000/v0/users/auth/register | Register new user  |
| **POST**   | http://localhost:5000/v0/users/auth/login    | Login current user |

### JWT Mechanism:

<image src="../public/jwt.png">

### MERN Stack:

<image src="../public/mern.png">

### Install Dependencies and Dev-Dependencies:

```
1. npm install express bcrypt body-parser email-validator jsonwebtoken typescript morgan dotenv mongoose -S
3. npm install nodemon ts-node-dev @types/morgan @types/mongoose -D
4. npm install @types/bcrypt @types/express @types/jsonwebtoken @types/node @types/validator -D
```

### Install MongoDB Community Server (by 2022):

```
1. brew tap mongodb/brew
2. brew install mongodb-community
3. brew services start mongodb/brew/mongodb-community
4. brew services stop mongodb-community
```

### MongoDB Shell Commands:

```
- mongo: started MongoDB on temrinal
- show dbs: print all databases on server
- use <db>: switch to <db> database
- db.<db>.drop(): drop database
- show collections: print a list of collections
- db.<collection>.drop(): drop collection
- db.<collection>.find().pretty(): print all data
- cls: clear terminal
```

#### Reference:

1. Install MongoDB via Homebrew: https://github.com/mongodb/homebrew-brew
