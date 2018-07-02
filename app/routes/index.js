const contractRoutes = require('./contract.routes.js');
const stageRoutes = require('./stage.routes.js');
const userRoutes = require('./user.routes.js');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.json({"message": "Welcome to Contract Manager application."});
    });
    
    contractRoutes(app);
    stageRoutes(app);
    userRoutes(app);
};