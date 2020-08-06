import { PORT } from '../port'
import axios from 'axios'

const API_CheckPhoneExist = `http://${PORT}:4000/users/checkValidPhone`


export const signInDb = async (phone, password) => {
    try {
        const res = await axios.post(API_SignIn, {
            "phone": phone,
            "password": password
        })
        if (res.data.status === 200) {
            return res.data
        } return false
    } catch (error) {
        console.error(error);
    }
}
export const signUpDb = async (user) => {
    console.log(user.name)
    console.log(user.phone)
    console.log(user.password)
    try {
        const res = await axios.post(API_SignUp, {
            "name": user.name,
            "phone": user.phone,
            "password": user.password,
            "urlAvatar": "https://chuoichin.com/wp-content/uploads/2019/01/avatar-den-13.jpg"
        })
        if (res.data.status === 200) {
            return res.data
        } return false
    } catch (error) {
        console.error(error);
    }
}

export const checkPhoneExist = async (phone) => {
    try {
        const res = await axios.post(API_CheckPhoneExist, {
            "phone": phone,
        })
        return res.data
    } catch (error) {
        console.error(error);
    }
}

