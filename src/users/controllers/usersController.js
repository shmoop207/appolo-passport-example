"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const passport_1 = require("@appolo/passport");
const googlePassportStrategy_1 = require("../passport/googlePassportStrategy");
let UsersController = class UsersController extends route_1.Controller {
    loginGoogle() {
    }
    loginGoogleCallback(res) {
        res.redirect('/dashboard');
    }
    logout(req, res) {
        req.logout();
        res.redirect('/');
    }
};
tslib_1.__decorate([
    route_1.get("/google"),
    route_1.middleware(passport_1.authenticate(googlePassportStrategy_1.GooglePassportStrategy, { scope: ['profile'] })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "loginGoogle", null);
tslib_1.__decorate([
    route_1.get("/google/callback"),
    route_1.middleware(passport_1.authenticate(googlePassportStrategy_1.GooglePassportStrategy, { failureRedirect: '/' })),
    tslib_1.__param(0, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "loginGoogleCallback", null);
tslib_1.__decorate([
    route_1.get("/logout"),
    tslib_1.__param(0, route_1.req()), tslib_1.__param(1, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "logout", null);
UsersController = tslib_1.__decorate([
    route_1.controller("/auth")
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=usersController.js.map