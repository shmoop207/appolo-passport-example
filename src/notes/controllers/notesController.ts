import {controller, Controller, get, del, put, middleware, res, req, IResponse, IRequest, post} from '@appolo/route';
import {inject} from '@appolo/inject';
import {NotesManager} from "../managers/notesManager";
import {ensureAuthMiddleware} from "../../dashboard/middlewares/authMiddlewares";
import {User} from "../../users/models/user";

@controller("/notes")
export class NotesController {
    @inject() notesManager: NotesManager

    @get('/add')
    @middleware(ensureAuthMiddleware)
    public add(@res() res: IResponse) {
        res.render('notes/add');
    }

    @post('/add')
    @middleware(ensureAuthMiddleware)
    async create(@req() req: IRequest, @res() res: IResponse) {
        let user = req.user as User;

        req.body.user = user._id;

        const note = await this.notesManager.create(req.body);
        res.redirect('/dashboard');

    }

    @get('/:id')
    @middleware(ensureAuthMiddleware)
    async getOne(@req() req: IRequest, @res() res: IResponse) {

        const note = await this.notesManager.getById(req.params.id, {lean: true})

        res.render('notes/read', {note});
    }


    @get('/edit/:id')
    @middleware(ensureAuthMiddleware)
    async edit(@req() req: IRequest, @res() res: IResponse) {

        const note = await this.notesManager.getById(req.params.id, {lean: true})

        res.render('notes/edit', {note})
    }

    @post('/:id')
    @middleware(ensureAuthMiddleware)
    async update(@req() req: IRequest, @res() res: IResponse) {

        await this.notesManager.updateById(req.params.id, {
            title: req.body.title, body: req.body.body
        });

        res.redirect('/dashboard');

    }

    @post('/delete/:id')
    @middleware(ensureAuthMiddleware)
    async delete(@req() req: IRequest, @res() res: IResponse) {

        await this.notesManager.deleteById(req.params.id);
        res.redirect('/dashboard');

    }
}



