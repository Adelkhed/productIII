const mongoose = require('mongoose');
require('dotenv').config();

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

console.log(dbName, username, pw); 

const uri = `mongodb+srv://${username}:${pw}@cluster0.nkmdcqp.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri)
mongoose.connect(uri)
    .then(() => console.log(`📡📡📡 Established a connection to the 8000 database`))
    .catch(err => console.log("❌❌❌❌ Something went wrong when connecting to the database", err));
