import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    secondName: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    email: string;

    favouriteArtistIds: string[];

    favouriteSongsIds: string[];

    favouriteBandsIds: string[];

    favouriteGenresIds: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
