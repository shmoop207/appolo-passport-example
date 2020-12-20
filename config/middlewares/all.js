"use strict";
const serve = require("serve-static");
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");
const mongo_1 = require("@appolo/mongo");
const MongoStore = require('connect-mongo')(session);
module.exports = function (app) {
    app.route.use(serve(path.join(__dirname, "../../public")));
    app.route.use(bodyparser.urlencoded({ extended: false }));
    app.route.use(bodyparser.json());
    app.route.use(session({
        secret: 'testtest',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: app.injector.get(mongo_1.ModelRepository).connection,
        }),
    }));
};
//# sourceMappingURL=all.js.map