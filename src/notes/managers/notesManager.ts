import {BaseCrudManager, model, Model} from '@appolo/mongo';
import {Note} from "../models/note";
import {define,singleton} from "@appolo/inject";

@define()
@singleton()
export class NotesManager extends BaseCrudManager<Note> {
    @model(Note) model: Model<Note>;
}
