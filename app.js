const express=require('express');
const app=express();
const indexRouter=require('./Routes/index')
// get is simply used to render.

// app.use is basically used as a middleware which will activate a function once a speciific url is entered.
app.use('/Home',indexRouter);

app.set('view engine','ejs')

const port=3000

app.listen(port,()=>{
    console.log('I am connected to port'+port)
})