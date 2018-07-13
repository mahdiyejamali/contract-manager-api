const contractRoutes = require('./contract.routes.js');
const noteRoutes = require('./note.routes.js');
const stageRoutes = require('./stage.routes.js');
const userRoutes = require('./user.routes.js');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.json({"message": "Welcome to Contract Manager application."});
    });

    contractRoutes(app);
    noteRoutes(app);
    stageRoutes(app);
    userRoutes(app);
};
