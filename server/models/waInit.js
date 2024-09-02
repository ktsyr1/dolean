// models/User.js
import { Schema, model } from 'mongoose';
const WaInit = model('WaInit', new Schema({
    instance_id: { type: String, required: true },
    access_token: { type: String, required: true },
    deleteState: { type: Boolean, default: false }
}))
export default WaInit;
