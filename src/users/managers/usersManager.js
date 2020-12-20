"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersManager = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const user_1 = require("../models/user");
const inject_1 = require("@appolo/inject");
let UsersManager = class UsersManager extends mongo_1.BaseCrudManager {
};
tslib_1.__decorate([
    mongo_1.model(user_1.User),
    tslib_1.__metadata("design:type", Object)
], UsersManager.prototype, "model", void 0);
UsersManager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], UsersManager);
exports.UsersManager = UsersManager;
//# sourceMappingURL=usersManager.js.map