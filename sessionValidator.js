module.exports = {
    ensureAuthenticated: function(req, res, next){
        // console.log(req.session.username);
        if(typeof(req.session.username)!='undefined'){
            return next();
        }else{
            res.redirect('/');
        }
        
    },
    forwardAuthenticated : function(req, res, next){
        if(typeof(req.session.username)=='undefined'){
            return next();
        }else{
            res.redirect('/dashboard');
        }
    }
};





/**
 * 
 * module.exports = {
    all: function(req, res){
        res.send('All todos')
    },
    viewOne: function(req, res){
        console.log('Viewing ' + req.params.id);
    },
    create: function(req, res){
        console.log('Todo created')
    },
    destroy: function(req, res){
        console.log('Todo deleted')
    },
    edit: function(req, res){
        console.log('Todo ' + req.params.id + ' updated')
    }
};
 */