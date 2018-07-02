const User = require('../models/user.model.js');

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.apiQuery(req.query)
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving User."
        });
    })
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};

/**
Number
number={all}123,456 - Both 123 and 456 must be present
number={nin}123,456 - Neither 123 nor 456
number={in}123,456 - Either 123 or 456
number={gt}123 - > 123
number={gte}123 - >= 123
number={lt}123 - < 123
number={lte}123 - <=123
number={ne}123 - Not 123
number={mod}10,2 - Where (number / 10) has remainder 2
String
string={all}match,batch - Both match and batch must be present
string={nin}match,batch - Neither match nor batch
string={in}match,batch - Either match or batch
string={not}coffee - Not coffee
string={exact}CoFeEe - Case-sensitive exact match of "CoFeEe"
Array
array={all}match,batch - Both match and batch must be present
array={nin}match,batch - Neither match nor batch
array={in}match,batch - Either match or batch
array={not}coffee - Not coffee
array={exact}CoFeEe - Case-sensitive exact match of "CoFeEe"
*/
