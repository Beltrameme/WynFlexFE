import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.0.17:3000/api',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery}