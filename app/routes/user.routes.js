module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.get('/users', users.findAll);

    app.get('/users/:userId', users.findOne);
}
