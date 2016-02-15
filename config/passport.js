
var LocalStrategy = require('passport-local').Strategy;

var User = require('./../api/users/user-model')

module.exports = function(passport) {
    
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(userId, done) {
        User.findById(userId, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signin', new LocalStrategy( {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },

        function(req, email, password, done) {
            User.findOne({email: email})
                .select('+password')
                .exec(function(err, user) {
                    if(err) { 
                        return done(err); 
                    }
                    if(!user) {
                        return done(null, false, {message: 'Incorrect email/password.'});
                    }
                    if(!user.comparePassword(password)) {
                        return done(null, false, {message: 'Incorrect email/password.'});
                    }
                    //User authenticated
                    return done(null, user);
            });
        }
    ));

    passport.use('local-signup', new LocalStrategy( {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },

        function(req, email, password, done) {
            var user = new User( {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            user.save(function(err) {
                if(err) {
                    if(err.code == 11000) {
                        return done(null, false, {message: 'Email already registered.'});
                    }
                    return done(err);
                }
                //User created and authenticated.
                return done(null, user);
            });
               
        }));
};