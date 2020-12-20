import {controller, Controller, get, middleware, res, IResponse, IRequest, req} from '@appolo/route';
import {inject} from '@appolo/inject';
import {NotesManager} from "../../notes/managers/notesManager";
import {ensureAuthMiddleware, ensureGuestMiddleware} from "../middlewares/authMiddlewares";
import {User} from "../../users/models/user";

@controller()
export class DashboardController extends Controller {

    @inject() notesManager:NotesManager

    @get("/")
    @middleware(ensureGuestMiddleware)
    public index(@res() res: IResponse) {
        res.render('login', {
            layout: 'login',
        });
    }

    @get("dashboard")
    @middleware(ensureAuthMiddleware)
    public async dashboard(@req() req: IRequest, @res() res: IResponse) {

        let user  =  req.user as User;

        const notes = await this.notesManager.findAll({filter:{user: user._id},lean:true});

        res.render('dashboard', {
            name: user.firstName,
            notes,
            imgSrc: user.image,
        });
    }
}



