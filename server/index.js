require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const {connection} = require('./config/db');

const {authRouter} = require('./routes/auth/auth.route')

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);


app.listen(PORT, () =>{
    connection();
    console.log(`Listening at the http://localhost:${PORT}`);
})