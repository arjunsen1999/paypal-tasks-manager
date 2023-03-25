require('dotenv').config();
const mongoose = require('mongoose');

const connection = () =>{
    mongoose.connect(process.env.MONGO_URL).then(() =>{
        console.log({msg : "Connection Successfully!"});
    }).catch((error) =>{
        console.log({error : "Connection Failed!"});
    });
}

module.exports = {
    connection
}