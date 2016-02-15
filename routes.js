
module.exports = function(app, passport) {
    
    //API - Routes ==================================================
    app.use('/api', requireAuthentication, require('./api/users/router'));
    //...

    //Site - Routes ==================================================
    app.get('/', function (req, res) {
        res.sendFile('/index.html', {root: './views'});
    });

    app.get('/login', function(req, res) {
        res.sendFile('/views/login.html', {root: './'});
    });

    app.post('/login', passport.authenticate('local-signin'), 
        //If called, user registered succesfuly
        function(req, res) {
            res.status(200).json({
                message: 'User logged in succesfuly.'
            });
        }
    );

    app.post('/logout', function(req, res){
        // Note(Hudo): Sould be this.
        // req.logout();
        req.session.destroy(function(err) {
            if(!err) {
                res.status(200).json({message: 'User logout.'});
            }
        });
    });

    app.get('/register', function(req, res) {
        res.sendFile('./views/register.html', {root: './'});
    });    

    app.post('/register', passport.authenticate('local-signup'),
        //If called, user registered succesfuly
        function(req, res) {
            res.status(200).json({
                message: 'User registered succesfuly.'
            });
        }
    );    

    app.get('/dashboard', requireAuthentication, function(req, res) {
        res.sendFile('/views/dashboard.html', {root: './'});
    });

    //...

    function requireAuthentication(req, res, next) {
        if(req.isAuthenticated()) {
            return next()
        }

        res.status(401).json({
                message: 'User not logged in.'
            });
    }

}