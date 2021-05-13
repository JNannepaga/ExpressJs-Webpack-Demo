import express from 'express';
import {LoginController} from '../controllers/loginController';

export  const userManagementRoutes = express.Router();

userManagementRoutes.get('/', function(req, res){
    res.render('app.pug');
});

userManagementRoutes.get('/Login', function(req, res){
    res.render('login.pug');
});

userManagementRoutes.post('/Login', function(req, res){
    const { userName, password } = req.body;
    //res.cookie('name','malips-cookie',{expire: 360000 + Date.now()}).set('cookie set');
    if(LoginController(userName, password)){
        res.render('home.pug',{userName : userName});
    }
    else{
        res.render('login.pug',{errorMessage : 'Invalid Credentials'});
    }
});
