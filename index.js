const express = require('express');
const rutasAuth=require('./rutas/rutasAuth')
const passportSetup=require('./config/config')

const app = express();
app.set('view engine', 'ejs');

app.use('/auth',rutasAuth)

app.get('/', (req, res) => {
    res.render('home');
});


app.listen(3800,()=>{
    console.log('se ejecuto el servidor')
})