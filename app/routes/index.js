
const contractRoutes = require('./contract.routes.js');

module.exports = function(app) {
    contractRoutes(app);
    // Other route groups could go here, in the future
};