const router = require('express').Router();
const passport=require('passport')

router.get('/login',(req,res)=>{
    res.render('login',{user:req.user})
})

router.get('/logout',(req,res)=>{
   // res.render('login',{user:req.user})
   res.send('se deslogueo')
})

router.get('/google',passport.authenticate('google',{
 scope:['profile']
}))

module.exports=router