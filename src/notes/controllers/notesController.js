"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const notesManager_1 = require("../managers/notesManager");
const authMiddlewares_1 = require("../../dashboard/middlewares/authMiddlewares");
let NotesController = class NotesController {
    add(res) {
        res.render('notes/add');
    }
    async create(req, res) {
        let user = req.user;
        req.body.user = user._id;
        const note = await this.notesManager.create(req.body);
        res.redirect('/dashboard');
    }
    async getOne(req, res) {
        const note = await this.notesManager.getById(req.params.id, { lean: true });
        res.render('notes/read', { note });
    }
    async edit(req, res) {
        const note = await this.notesManager.getById(req.params.id, { lean: true });
        res.render('notes/edit', { note });
    }
    async update(req, res) {
        await this.notesManager.updateById(req.params.id, {
            title: req.body.title, body: req.body.body
        });
        res.redirect('/dashboard');
    }
    async delete(req, res) {
        await this.notesManager.deleteById(req.params.id);
        res.redirect('/dashboard');
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", notesManager_1.NotesManager)
], NotesController.prototype, "notesManager", void 0);
tslib_1.__decorate([
    route_1.get('/add'),
    route_1.middleware(authMiddlewares_1.ensureAuthMiddleware),
    tslib_1.__param(0, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NotesController.prototype, "add", null);
tslib_1.__decorate([
    route_1.post('/add'),
    route_1.middleware(authMiddlewares_1.ensureAuthMiddleware),
    tslib_1.__param(0, route_1.req()), tslib_1.__param(1, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotesController.prototype, "create", null);
tslib_1.__decorate([
    route_1.get('/:id'),
    route_1.middleware(authMiddlewares_1.ensureAuthMiddleware),
    tslib_1.__param(0, route_1.req()), tslib_1.__param(1, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotesController.prototype, "getOne", null);
tslib_1.__decorate([
    route_1.get('/edit/:id'),
    route_1.middleware(authMiddlewares_1.ensureAuthMiddleware),
    tslib_1.__param(0, route_1.req()), tslib_1.__param(1, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotesController.prototype, "edit", null);
tslib_1.__decorate([
    route_1.post('/:id'),
    route_1.middleware(authMiddlewares_1.ensureAuthMiddleware),
    tslib_1.__param(0, route_1.req()), tslib_1.__param(1, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotesController.prototype, "update", null);
tslib_1.__decorate([
    route_1.post('/delete/:id'),
    route_1.middleware(authMiddlewares_1.ensureAuthMiddleware),
    tslib_1.__param(0, route_1.req()), tslib_1.__param(1, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotesController.prototype, "delete", null);
NotesController = tslib_1.__decorate([
    route_1.controller("/notes")
], NotesController);
exports.NotesController = NotesController;
//# sourceMappingURL=notesController.js.map