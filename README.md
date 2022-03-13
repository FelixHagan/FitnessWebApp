# Fitness Web App

A fitness web app was developed in order help give guidance and motivate the user to train and improve upon their current level of fitness.

## Key Features

- Contains a number of different guided workouts available to users of different fitness levels
- Contains training programs that cover both running and high intensity interval training
- Contains functionality that allows the user to create, update and delete their own training programs
- Contains functionality that allows the user to message a coach
- Contains a forum that users can add messages to and report any offensive messages
- Contains a separate page for users who are of type coach
  - Shows the different workouts the users have carried out.
  - Shows the number of workouts the users have carried out.
  - Shows any messages that have been sent to the coach.
  - Allows the coach to message the users as well as reply to any messages that have been sent to the coach.
- Contains a separate page for users who are of type administrator
  - Contains information of all the different users of the fitness app.
  - Provides the administrator the ability to remove any current users of the fitness app.
  - Any reported messages are shown on this page.
  - Contains functionality that allows the administrator to remove any reported messages.

## Usage

To clone the fitness app you will need to have Git and Node.js (which comes with npm) installed on your computer.

Install dependancies

```js
npm install
cd client
npm install
```

### Run Server
```js
// run express on :5000 and react on :3000
npm run dev
// Express API only on :5000
npm run server
// React Client only on :3000
npm run client
```

## Fitness Web App Screenshots

- The user can follow workouts

<img width="674" alt="image" src="https://user-images.githubusercontent.com/98223195/158083497-bd67db02-0c5a-4f33-ab8a-ff7f1faf6da5.png">

- The user can follow training programs and create, update and delete their own training programs

<img width="645" alt="image" src="https://user-images.githubusercontent.com/98223195/158083576-c39a0d44-7fdb-46f2-9d06-0a4c3bb55214.png">

- The user has access to the forum and also has the ability to message a coach

<img width="536" alt="image" src="https://user-images.githubusercontent.com/98223195/158083636-57a60c90-dac6-4389-a8e3-085ac73129a2.png">

- The coach and admin page to give a user of type coach or of type administrator extra functionality
