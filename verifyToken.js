var jwt = require('jsonwebtoken');
var config = require('./config');

function verifyToken(req, res, next){
        var token = req.headers['x-access-token'];
        //console.log(token);
        if(!token) return res.status(403).send(  { msg : 'NO TOKEN PROVIDED', token : null } );
        else{
            jwt.verify(token, config.secret, (err, decodedData)=>{
                if(err) res.status(500).send({ msg: 'TOKEN AUTHENTICATION FAILED.' });
                else{
                    req.token = decodedData;
                    next(); 
                }
            });
        }
    }
    
module.exports = verifyToken;

/**
  exports.verifyToken = function(){

  }
  exports.sampleMethod = function(){

  }
 */