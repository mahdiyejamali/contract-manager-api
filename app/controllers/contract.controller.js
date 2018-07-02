const Contract = require('../models/contract.model.js');

// Create and Save a new Contract
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Contract content can not be empty"
        });
    }

    // Create a Contract
    const contract = new Contract(req.body);

    // Save contract in the database
    contract.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Contract."
        });
    });
};

// Retrieve and return all contracts from the database.
exports.findAll = (req, res) => {
    Contract.apiQuery(req.query)
    .then(contracts => {
        res.send(contracts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Contract."
        });
    })
};

// Find a single contract with a contractId
exports.findOne = (req, res) => {
    Contract.findById(req.params.contractId)
    .then(contract => {
        if(!contract) {
            return res.status(404).send({
                message: "Contract not found with id " + req.params.contractId
            });            
        }
        res.send(contract);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Contract not found with id " + req.params.contractId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving contract with id " + req.params.contractId
        });
    });
};

// Update a contract identified by the contractId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Contract content can not be empty"
        });
    }

    // Find Contract and update it with the request body
    Contract.findByIdAndUpdate(req.params.contractId, req.body, {new: true})
    .then(contract => {
        if(!contract) {
            return res.status(404).send({
                message: "Contract not found with id " + req.params.contractId
            });
        }
        res.send(contract);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Contract not found with id " + req.params.contractId
            });                
        }
        return res.status(500).send({
            message: "Error updating contract with id " + req.params.contractId
        });
    });
};

// Delete a contract with the specified contractId in the request
exports.delete = (req, res) => {
    Contract.findByIdAndRemove(req.params.contractId)
    .then(contract => {
        if(!contract) {
            return res.status(404).send({
                message: "Contract not found with id " + req.params.contractId
            });
        }
        res.send({message: "Contract deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Contract not found with id " + req.params.contractId
            });                
        }
        return res.status(500).send({
            message: "Could not delete contract with id " + req.params.contractId
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
