module.exports = (app) => {
    const stages = require('../controllers/stage.controller.js');

    app.get('/stages', stages.findAll);

    app.get('/stages/:stageId', stages.findOne);
}