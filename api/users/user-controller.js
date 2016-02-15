var User = require('./user-model');


function getUsers(req, res) {
    User.find()
        .exec(function(err, users) {
            if(err) throw err;

            res.send(users);
        });
}

function getMe(req, res) {
    User.findById(req.user._id, function(err, user) {
        if(err) throw err;

        //Note(Hudo): Never send the user's password.
        delete user.password;
        res.send(user);
    });
}

module.exports.getMe = getMe;
module.exports.getUsers = getUsers;