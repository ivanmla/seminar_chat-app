# _Chat-app_
## Introduction
Application for chating based on Scaledrone service. It is made as basic application that supports chating for multiple clients. 
## Technologies used 
- React
- Scaledrone service - https://www.scaledrone.com/
## Features
- Each user gets random name when enter a room (url shared)
- Each user can send a message
- The message is visible to all users in chat room
## How it is made
- basic application structure has been set with _vite_ template
- ViewMessages component has been created as function components used for presentation
- SendMessages component has been created as function components used for handling user's input
- App.jsx is class component where most of the logic is implemented. Scaledrone service configuration has been set in constructor, and there are few functions as described on the Scaledrone documentation: https://www.scaledrone.com/blog/tutorial-build-a-reactjs-chat-app/ 
- useState hook has been used for transfering properties between components
- MessageCard is function component used for displaying single message
## Using and testing
- Clone repository: run git clone 
- Install dependencies (run _npm -i_ command) 
- Enter the Scaledrone service key into the _.env_ file under the key _VITE_SCALEDRONE_CHANNEL_ID_
- Start the application (_npm run dev_ command)
- open application in multiple browsers (url provided on starting the app)
- happy chating :)
