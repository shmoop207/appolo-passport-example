import {controller, Controller, get, middleware, res, IResponse, IRequest, req} from '@appolo/route';
import {authenticate} from "@appolo/passport";
import {GooglePassportStrategy} from "../passport/googlePassportStrategy";

@controller("/auth")
export class UsersController extends Controller {

    @get("/google")
    @middleware(authenticate(GooglePassportStrategy,{scope: ['profile']}))
    public loginGoogle() {
    }

    @get("/google/callback")
    @middleware(authenticate(GooglePassportStrategy, {failureRedirect: '/'}))
    public loginGoogleCallback(@res() res: IResponse) {
        res.redirect('/dashboard')
    }

    @get("/logout")
    public logout(@req() req: IRequest, @res() res: IResponse) {
        req.logout();
        res.redirect('/');
    }

}
