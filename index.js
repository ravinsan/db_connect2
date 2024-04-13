import express from 'express';
import mongoose from 'mongoose';


const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

mongoose.connect("mongodb://127.0.0.1:27017/ravi")
app.listen(3000, () => console.log('Example app listening on port 3000!'));


