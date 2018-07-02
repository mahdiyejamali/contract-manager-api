const Stage = require('../models/stage.model.js');

// Retrieve and return all stages from the database.
exports.findAll = (req, res) => {
    Stage.apiQuery(req.query)
    .then(stages => {
        res.send(stages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Stage."
        });
    })
};

// Find a single stage with a stageId
exports.findOne = (req, res) => {
    Stage.findById(req.params.stageId)
    .then(stage => {
        if(!stage) {
            return res.status(404).send({
                message: "Stage not found with id " + req.params.stageId
            });            
        }
        res.send(stage);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Stage not found with id " + req.params.stageId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving stage with id " + req.params.stageId
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
