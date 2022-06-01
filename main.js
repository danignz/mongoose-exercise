const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/app';

mongoose.connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to ${x.connection.name} database`);
  })
  .then(() => {
    // Iteration 2
    // return ...
  })
  .then((user) => {
    // Iteration 2
    // console.log('Created: ', user)
  })
  .then(() => {
    // Iteration 3
    // return ...
  })
  .then((user) => {
    // Iteration 3
    // console.log('Edited: ', user)
  })
  .then(() => {
    // Iteration 4
    // return ...
  })
  .then((users) => {
    // Iteration 4
    // console.log('Created: ', users)
  })
  .then(() => {
    // Iteration 5
    // return ...
  })
  .then((user) => {
    // Iteration 5
    // console.log('Deleted: ', user)
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch(err => {console.log(err)})