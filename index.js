const express = require('express');
const rutasAuth=require('./rutas/rutasAuth')
const profileRutas=require('./rutas/profile.router')
const passportSetup=require('./config/config')
const keys=require('./config/keys')
const mongoose=require('mongoose')
const cookieSession =require('cookie-session');
const passport = require('passport');

const app = express();
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookiekey]
}))

app.use(passport.initialize())
app.use(passport.session({
    secret:'secreto',
    resave:false,
    saveUninitialized:true
}
    
))
// mongoose.connect('mongodb+srv://joselcondori:lXYs1pxtMz32UkOO@cluster0.tiraw6w.mongodb.net/?retryWrites=true&w=majority')
// .then(result=>result)
// .catch(error=>console.log(error))

mongoose.connect(keys.mongodb.dbUrl)
.then(result=>console.log('se conecto'))
    


app.use('/auth',rutasAuth)
app.use('/profile',profileRutas)


app.get('/', (req, res) => {
    res.render('home',{user:req.user});
});


app.listen(3800,()=>{
    console.log('se ejecuto el servidor')
})