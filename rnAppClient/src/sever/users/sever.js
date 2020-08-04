import { PORT } from '../port'
import axios from 'axios'

const API_SignIn = `http://${PORT}:4000/users/login`

export const validatePhoneNumber = (phone) => {
    var regexp = /^(03|07|08|09|01[2|6|8|9])+([0-9]{8})$/
    return regexp.test(phone)
}
export const signIn = async (phone, password) => {
    try {
        const res = await axios.post(API_SignIn, {
            "phone": phone,
            "password": password
        })
        if (res.data.status === 200) {
            return true
        } return false
    } catch (error) {
        console.error(error);
    }
}
