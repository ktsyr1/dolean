const config = {
    // api: "http://localhost:5000/api",
    api: "https://courses-lb-api.vercel.app/api",
};
import Cookies from "js-cookie"
let token = Cookies.get("authorization")
export const headers = { headers: { "authorization": `Bearer ${token}` } }
export default config;
