"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSerializer = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const usersManager_1 = require("../managers/usersManager");
const passport_1 = require("@appolo/passport");
let UserSerializer = class UserSerializer extends passport_1.PassportSerializer {
    serializeUser(user) {
        return user.id;
    }
    deserializeUser(id) {
        return this.usersManager.getById(id);
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", usersManager_1.UsersManager)
], UserSerializer.prototype, "usersManager", void 0);
UserSerializer = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    passport_1.serializer()
], UserSerializer);
exports.UserSerializer = UserSerializer;
//# sourceMappingURL=userSerializer.js.map