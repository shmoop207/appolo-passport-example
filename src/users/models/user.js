"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
let User = class User extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "googleId", void 0);
tslib_1.__decorate([
    mongo_1.prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "displayName", void 0);
tslib_1.__decorate([
    mongo_1.prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    mongo_1.prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    mongo_1.prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "image", void 0);
tslib_1.__decorate([
    mongo_1.prop({ default: Date.now }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
User = tslib_1.__decorate([
    mongo_1.schema(),
    mongo_1.model()
], User);
exports.User = User;
//# sourceMappingURL=user.js.map