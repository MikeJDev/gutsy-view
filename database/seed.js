const data = require('./mockData.js')
const db = require('./dbConnection.js')
const mongoose = require('mongoose')

db.Gutsydb.remove({})
  .then(() => {
    db.Gutsydb.insertMany(data)
    .then((success) => {
      console.log('successfully seeded db')
    })
  }).catch(err => console.log('error'))
console.log(data)




