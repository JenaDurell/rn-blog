import axios from 'axios'


export default axios.create({
    //baseURL is from jsonserver npm run tunnel, must be changed after expiration
    baseURL: 'http://e30ca2275c29.ngrok.io'
})






