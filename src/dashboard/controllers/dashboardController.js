"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const notesManager_1 = require("../../notes/managers/notesManager");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
let DashboardController = class DashboardController extends route_1.Controller {
    index(res) {
        res.render('login', {
            layout: 'login',
        });
    }
    async dashboard(req, res) {
        let user = req.user;
        const notes = await this.notesManager.findAll({ filter: { user: user._id }, lean: true });
        res.render('dashboard', {
            name: user.firstName,
            notes,
            imgSrc: user.image,
        });
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", notesManager_1.NotesManager)
], DashboardController.prototype, "notesManager", void 0);
tslib_1.__decorate([
    route_1.get("/"),
    route_1.middleware(authMiddlewares_1.ensureGuestMiddleware),
    tslib_1.__param(0, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DashboardController.prototype, "index", null);
tslib_1.__decorate([
    route_1.get("dashboard"),
    route_1.middleware(authMiddlewares_1.ensureAuthMiddleware),
    tslib_1.__param(0, route_1.req()), tslib_1.__param(1, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardController.prototype, "dashboard", null);
DashboardController = tslib_1.__decorate([
    route_1.controller()
], DashboardController);
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboardController.js.map