const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const colors = require('colors');
const cors = require('cors');
const conn = require('./dbcon');
const config = require('./config');
const { forwardAuthenticated } = require('./sessionValidator');

const app = express(); 
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
    secret : config.sessionSecrect,
    resave : true,
    saveUninitialized : true,
}));

app.get('/',forwardAuthenticated, (req,res)=>{
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render('pages/index');
});

const server = app.listen(PORT, '0.0.0.0', ()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log('SUCCESS : SERVER STARTED LISTENING AT : http://%s:%s'.green, host, PORT);
});
