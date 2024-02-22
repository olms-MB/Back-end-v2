require('dotenv').config({ path: '.env' });
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./Routes/userRoutes');

const app = express();

app.use(userRouter);


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('connected to database');
    app.listen(process.env.PORT,()=>{
        console.log(`server started at port ${process.env.PORT}`);
    })
})
.catch(err => console.error('Error connectingS', err));