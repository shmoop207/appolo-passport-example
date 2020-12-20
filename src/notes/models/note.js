"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const user_1 = require("../../users/models/user");
let Note = class Note extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Note.prototype, "title", void 0);
tslib_1.__decorate([
    mongo_1.prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Note.prototype, "body", void 0);
tslib_1.__decorate([
    mongo_1.prop({ default: Date.now() }),
    tslib_1.__metadata("design:type", Date)
], Note.prototype, "dateCreated", void 0);
tslib_1.__decorate([
    mongo_1.propRef(user_1.User),
    tslib_1.__metadata("design:type", Object)
], Note.prototype, "user", void 0);
Note = tslib_1.__decorate([
    mongo_1.schema(),
    mongo_1.model()
], Note);
exports.Note = Note;
//# sourceMappingURL=note.js.map