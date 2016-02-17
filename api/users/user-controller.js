var User = require('./user-model');


module.exports.getAll = function(req, res) {
    User.find()
        .exec(function(err, users) {
            if(err) throw err;

            res.send(users);
        });
};

module.exports.getMe = function(req, res) {
    User.findById(req.user._id, function(err, user) {
        if(err) throw err;

        res.send(user);
    });
};

module.exports.onLoginSuccess = function(req, res) {
    res.status(200).json({
        message: 'User logged in succesfuly.'
    });
};

module.exports.onRegisterSuccess = function(req, res) {
    res.status(200).json({
        message: 'User registered succesfuly.'
    });
};

module.exports.logout = function(req, res) {
    // Note(Hudo): Sould be this.
    // req.logout();
    req.session.destroy(function(err) {
        if(!err) {
            res.status(200).json({message: 'User logout.'});
        }
    });
};