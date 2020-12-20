import {Schema,schema,model,prop,mongoose,propRef,Ref} from '@appolo/mongo';
import {User} from "../../users/models/user";

@schema()
@model()
export class Note  extends Schema{
  @prop({ required: true})
  title: string

  @prop({ required: true})
  body: string

  @prop({  default: Date.now()})
  dateCreated: Date

  @propRef(User)
  user : Ref<User>

}
