import {Schema, schema, model, prop, mongoose, propRef, Ref} from '@appolo/mongo';

@schema()
@model()
export class User extends Schema {

    _id: string

    @prop({required: true})
    googleId: string;

    @prop({required: true})
    displayName: string

    @prop({required: true})
    firstName: string

    @prop({required: true})
    lastName: string;

    @prop({required: true})
    image: string;

    @prop({default: Date.now})
    createdAt: Date
}

