"use strict";
const view_1 = require("@appolo/view");
const mongo_1 = require("@appolo/mongo");
const logger_1 = require("@appolo/logger");
const passport_1 = require("@appolo/passport");
module.exports = async function (app) {
    await app.module.load(logger_1.LoggerModule);
    app.module
        .use(mongo_1.MongoModule.for({ connection: process.env.MONGO }))
        .use(view_1.ViewModule.for({
        viewEngine: view_1.ViewEngines.handlebars,
        viewFolder: __dirname + "../../../src/views",
        viewExt: "hbs"
    }))
        .use(passport_1.PassportModule.for({ session: true }));
};
//# sourceMappingURL=all.js.map