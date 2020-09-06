const mongoose = require('mongoose');
const config = require('config');

const connecting_database = async () => {
  try {
    const database = config.get('mongo');
    await mongoose.connect(
      database, 
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    );  
  }
  catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

module.exports = connecting_database;