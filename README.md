## Chat App
[![Build Status](https://travis-ci.org/dye784/Chat-App.svg?branch=master)](https://travis-ci.org/dye784/Chat-App)

### Introduction
Hello, My name is Damon Ye and this is a Chat App I built!
The app is built using React, Redux, Node, Express, Sequelize, Postgres, and Socket.io. Testing is done with Mocha, Chai, SuperTest, and Enzyme.

### Installation
**Fork** and **clone** this repository.

Then install the dependencies

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
2. Redux Thunk tests.
3. Socket.io tests.
4. Display new messages for each channel.
5. Auto scroll to bottom on new message. (Complete)
6. Put time stamps some place. (Complete)
7. User Image. (Complete)

### Current Concerns
For the mvp, I designed it so it serves up all the messages for all the chatrooms. The next stage was to design it to be more scalable. Initially I wanted to design it so that on the initial request to the server, the server sends back the first 20 or so messages for each chatroom. When a user scrolls up past the first 20 messages it would then send a request to the server to retrieve the next 20 or so messages for that specific channel. One of the main blockers for this was figuring out how to tract scrolling using React. Unfortunately I could not figure that part out. So I did not move forward with the scalability optimization.

Another challenge that arose from scrolling with React is to scroll to the bottom of the chat when a new message is received.

As the number of chatrooms, users, and messages grows the initial request to the database would take longer to retrieve the data. It would then make sense to provide a load screen till the response is received.

