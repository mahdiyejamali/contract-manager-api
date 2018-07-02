module.exports = (app) => {
    const contracts = require('../controllers/contract.controller.js');

    app.post('/contracts', contracts.create);

    app.get('/contracts', contracts.findAll);

    app.get('/contracts/:contractId', contracts.findOne);

    app.put('/contracts/:contractId', contracts.update);

    app.delete('/contracts/:contractId', contracts.delete);
}