import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface UserModel {

    _id?: string;
}

@Schema()
export class User extends Document {
    @Prop()
    name: String;
    @Prop()
    owes: Object;
    @Prop()
    owed_by: Object;
    @Prop()
    balance: String;
}

export const UserSchema = SchemaFactory.createForClass(User);