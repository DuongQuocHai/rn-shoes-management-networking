import { PORT } from '../port'
import axios from 'axios'

const API_SignIn = `http://${PORT}:4000/users/sign-in`

export const validatePhoneNumber = (phone) => {
    var regexp = /^(03|07|08|09|01[2|6|8|9])+([0-9]{8})$/
    return regexp.test(phone)
}
export const signIn = async () => {
    try {
        const res = await axios.post('http://192.168.1.121:4000/users/login', {
            "phone": "0903585175",
            "password": "123456"
        })
        console.log(res.data)

        

        // await axios.post('http://192.168.1.121:4000/users/login', {
        //     "phone": "0903585175",
        //     "password": "123456"
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    } catch (error) {
        console.error(error);
    }
}