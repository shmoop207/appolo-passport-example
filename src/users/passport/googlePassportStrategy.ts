import {PassportStrategy,strategy} from "@appolo/passport";
import GoogleStrategy = require('passport-google-oauth20');
import {VerifyCallback} from "passport-google-oauth20";
import {define, singleton, inject} from "@appolo/inject";
import {UsersManager} from "../managers/usersManager";

@define()
@singleton()
@strategy(GoogleStrategy.Strategy)
export class GooglePassportStrategy extends PassportStrategy {

    @inject() usersManager: UsersManager;

    public get options() {

        return {
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: '/auth/google/callback'
        }
    }

    public async validate(accessToken: string, refreshToken: string, profile: GoogleStrategy.Profile): Promise<any> {

        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
        };

        let user = await this.usersManager.findOne({filter: {googleId: profile.id}});

        if (user) {
            return user;
        }

        user = await this.usersManager.create(newUser);

        return user;

    }
}
