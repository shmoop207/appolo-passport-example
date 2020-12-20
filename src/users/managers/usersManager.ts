import {BaseCrudManager, model, Model} from '@appolo/mongo';
import {User} from "../models/user";
import {define,singleton} from "@appolo/inject";

@define()
@singleton()
export class UsersManager extends BaseCrudManager<User> {
    @model(User) model: Model<User>;
}
