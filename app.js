const express = require('express');

const app = express();

const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('cart', cartRouter);

app.use((req,res)=>{
    res.status(404).send('page not found');
})


app.listen(3000);
