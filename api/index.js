import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(
  process.env.MONGO
).then(() => {
    console.log("DB is connected")
}).catch((error) => {
    console.log(error)
});

const app = express();

app.listen('3000', () => {
    console.log('Server is running on port 3000!');
})