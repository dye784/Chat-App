## Chat App

### Introduction
Hello, My name is Damon Ye and this is a Chat App I built!
The app is built using React, Redux, Node, Express, Sequelize, Postgres, and Socket.io. Testing is done with mocha, chai, and supertest.

### Installation
**Fork** and **clone** this repository.

Then insall the dependencies

```
npm install
```

Then create the database (Make sure you have Postgres running!)

```
npm run db-init
```

Then seed the database (Random data with Fakerjs)

```
npm run seed
```

Start webpack

```
npm run build
```

To run the tests

```
npm test
```

To start the server

```
npm start
```

Then go to [http://localhost:1337/](http://localhost:1337/) to try the app out!

### Instructions
You can either sign in with a test user - email: `example@example.com` & password: `12345` or just sign in with a valid email (i.e. something@something.something) with a password you can remember (i.e. 12345).

### Features to Add
1. Send only a few messages and allow scrolling to send queries to retreive more messages.
2. Enzyme tests.
3. Redux Thunk tests.
4. Socket.io tests.
5. Display new messages for each channel.
6. Auto scroll to bottom on new message.
7. Put time stamps some place.
