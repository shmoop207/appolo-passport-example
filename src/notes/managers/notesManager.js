"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesManager = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const note_1 = require("../models/note");
const inject_1 = require("@appolo/inject");
let NotesManager = class NotesManager extends mongo_1.BaseCrudManager {
};
tslib_1.__decorate([
    mongo_1.model(note_1.Note),
    tslib_1.__metadata("design:type", Object)
], NotesManager.prototype, "model", void 0);
NotesManager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], NotesManager);
exports.NotesManager = NotesManager;
//# sourceMappingURL=notesManager.js.map