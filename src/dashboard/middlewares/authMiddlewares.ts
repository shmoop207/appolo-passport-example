import {IRequest, IResponse, NextFn} from "@appolo/route"

export function ensureAuthMiddleware(req: IRequest, res: IResponse, next: NextFn) {
    if (req.isAuthenticated()) {
        return next()
    } else {
        res.redirect('/');
    }
}

export function ensureGuestMiddleware(req: IRequest, res: IResponse, next: NextFn) {
    if (req.isAuthenticated()) {
        res.redirect('/dashboard')
    } else {
        return next();
    }
}


