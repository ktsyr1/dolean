import axios from 'axios';
import WaInit from '../models/waInit.js';

export default async function waSend(phone, msg) {
    try {
        const waInit = await WaInit.findOne().select("-context -keys");

        let instance_id = waInit.instance_id
        let access_token = waInit.access_token
        let api = `https://taykom.com/api`

        let {data} = await axios.post(`${api}/send`, {
            "number": phone,
            "type": "text",
            "message": msg,
            instance_id,
            access_token
        })
        return data
    } catch (error) {
        console.log(error);
        throw new Error({ message: error.message });
    }
};
