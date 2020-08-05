import { PORT } from '../port'
import axios from 'axios'

const API_SignIn = `http://${PORT}:4000/users/login`

export const validatePhoneNumber = (phone) => {
    var regexp = /^(03|07|08|09|01[2|6|8|9])+([0-9]{8})$/
    return regexp.test(phone)
}
// export const signInDb = async (phone, password) => {
//     console.log(phone)
//     console.log(password)
//     try {
//         const res = await axios.post(API_SignIn, {
//             "phone": phone,
//             "password": password
//         })
//         if (res.data.status === 200) {
//             return res.data
//         } return false
//     } catch (error) {
//         console.error(error);
//     }
// }
export const signInDb = async (phone, password) => {
    try {
        console.log(phone)
        console.log(password)
        let response = await fetch('http://192.168.43.139:4000/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "phone": phone,
                "password": password
            })
        });
        let resJson = await response.json();
        console.log(resJson);
        return resJson
    } catch (error) {
        console.error(error);
    }
}
