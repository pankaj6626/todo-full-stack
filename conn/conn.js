const mongoose = require("mongoose");
require('dotenv').config();

//define the mongodb connection url
//const mongoUrl=process.env.MONGODB_URL_LOCAL;
const mongoUrl=process.env.MONGODB_URL;
/*const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongoUrl"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();*/

mongoose.connect(mongoUrl,{
  //UseNewUrlParser:true,
  //UseUnifiedTopology:true
});

//get the default connection
//mongoose maintaines a default connection object representng the mongodb connection

const db = mongoose.connection;

// define eventlistener for database connection

db.on('connected',()=>{
  console.log("connected to mongodb server");
})

db.on('error', (err) => {
  console.error('Server error:', err);
});

db.on('disconnected',()=>{
  console.log("mongodb disconnected");
})

//export the database connection
module.exports=db;
