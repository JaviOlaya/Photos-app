import {Schema, model, Document} from 'mongoose';
import { string } from 'prop-types';

const schema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

interface IPhoto extends Document{
    title: string;
    description: string;
    imagePath: string;
}

export default model<IPhoto>('Photo',schema);
