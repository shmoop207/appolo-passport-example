import GoogleStrategy = require('passport-google-oauth20');
import {define, singleton, inject} from "@appolo/inject";
import {UsersManager} from "../managers/usersManager";
import {serializer,PassportSerializer} from "@appolo/passport";
import * as passport from "passport";

@define()
@singleton()
@serializer()
export class UserSerializer extends PassportSerializer {

    @inject() usersManager: UsersManager;

    public  serializeUser(user: any) {
        return  user.id
    }

    public  deserializeUser(id: any) {
        return this.usersManager.getById(id)
    }

}
