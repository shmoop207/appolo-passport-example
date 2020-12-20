"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GooglePassportStrategy = void 0;
const tslib_1 = require("tslib");
const passport_1 = require("@appolo/passport");
const GoogleStrategy = require("passport-google-oauth20");
const inject_1 = require("@appolo/inject");
const usersManager_1 = require("../managers/usersManager");
let GooglePassportStrategy = class GooglePassportStrategy extends passport_1.PassportStrategy {
    get options() {
        return {
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: '/auth/google/callback'
        };
    }
    async validate(accessToken, refreshToken, profile) {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
        };
        let user = await this.usersManager.findOne({ filter: { googleId: profile.id } });
        if (user) {
            return user;
        }
        user = await this.usersManager.create(newUser);
        return user;
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", usersManager_1.UsersManager)
], GooglePassportStrategy.prototype, "usersManager", void 0);
GooglePassportStrategy = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    passport_1.strategy(GoogleStrategy.Strategy)
], GooglePassportStrategy);
exports.GooglePassportStrategy = GooglePassportStrategy;
//# sourceMappingURL=googlePassportStrategy.js.map