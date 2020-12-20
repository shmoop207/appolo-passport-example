"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureGuestMiddleware = exports.ensureAuthMiddleware = void 0;
function ensureAuthMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.redirect('/');
    }
}
exports.ensureAuthMiddleware = ensureAuthMiddleware;
function ensureGuestMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/dashboard');
    }
    else {
        return next();
    }
}
exports.ensureGuestMiddleware = ensureGuestMiddleware;
//# sourceMappingURL=authMiddlewares.js.map