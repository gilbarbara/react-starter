var Router = require('react-router');
var router;

module.exports = {
    create: function (routes) {
        router = Router.create({
            routes: routes,
            location: Router.HistoryLocation
        });
    },

    getRouter: function () {
        return router;
    }
};
