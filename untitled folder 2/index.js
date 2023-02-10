require("dotenv").config();

const express = require('express');
const { default: mongoose } = require('mongoose');

const adressRouter = require('./routes/adressRoutes');
const buyerRouter = require('./routes/buyerRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const orderRouter = require('./routes/orderRoutes');
const userRouter = require('./routes/userRoutes');

const PORT = process.env.PORT || 8080;
var cors = require("cors");


const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.set("strictQuery", true);
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.z3umjhj.mongodb.net/database`)
    .then(res => {
        console.log('Connect!');
    })
    .catch(err => {
        console.log('err', err);
    })

app.use('/api/addresses', adressRouter);
app.use('/api/buyers', buyerRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/orders', orderRouter);
app.use('/auth/login', userRouter);

app.get('/', function (req, res) {
    res.json("Hello");
})

app.listen(PORT);