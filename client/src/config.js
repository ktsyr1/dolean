const config = {
    // api: "http://localhost:5000/api",
    api: "https://courses-lb-api.vercel.app/api",
};
import Cookies from "js-cookie"
let token = Cookies.get("x-auth-token")
export const headers = { headers: { "x-auth-token": token } }
export default config;
