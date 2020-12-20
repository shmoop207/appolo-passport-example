"use strict";
import {App} from '@appolo/core';
import    serve = require('serve-static');
import    path = require('path');
import    bodyparser = require('body-parser');

import session = require('express-session');
import {ModelRepository} from '@appolo/mongo';
const MongoStore = require('connect-mongo')(session)


export = function (app: App) {


    app.route.use(serve(path.join(__dirname, "../../public")))

    app.route.use(bodyparser.urlencoded({extended: false}));
    app.route.use(bodyparser.json());

    app.route.use(
        session({
            secret: 'testtest',
            resave: false,
            saveUninitialized: false,
            store: new MongoStore({
                mongooseConnection: app.injector.get<ModelRepository>(ModelRepository).connection,
            }),
        }));

};
