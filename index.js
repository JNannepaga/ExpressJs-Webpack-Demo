import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import {userManagementRoutes} from './src/routes/userManagementRoutes';

const app = express();

//view Engine
app.set('view engine', 'pug');
app.set('views', './src/views');

//for cookie parser
app.use(cookieParser());

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

//Static File Server
app.use('/Malips', express.static('public'));

//Routes
app.use('/', userManagementRoutes);

//server
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is listing at ${port} :: http://localhost:${port}`);
});