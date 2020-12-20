import {App} from '@appolo/core';
import {ViewEngines, ViewModule} from '@appolo/view';
import {MongoModule} from '@appolo/mongo';
import {LoggerModule} from '@appolo/logger';
import {PassportModule} from "@appolo/passport";


export = async function (app: App) {
    await app.module.load(LoggerModule)

    app.module
        .use(MongoModule.for({connection: process.env.MONGO}))
        .use(ViewModule.for({
            viewEngine: ViewEngines.handlebars,
            viewFolder: __dirname + "../../../src/views",
            viewExt: "hbs"
        }))
        .use(PassportModule.for({session: true}));
}
