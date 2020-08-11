import { PORT } from '../port'
import axios from 'axios'

const API_GETSHOES = `http://${PORT}/shoes`
const API_ADDSHOES = `http://${PORT}/shoes/add`
const API_SEARCHSHOES = `http://${PORT}/shoes/search/`
const API_DETAILSHOES = `http://${PORT}/shoes/`
const API_UPDATESHOE = `http://${PORT}/shoes/update/`
const API_DELETESHOE = `http://${PORT}/shoes/delete/`

// const RANDOM_IMAGE = 'https://api.unsplash.com/users/:username/likes/?client_id=DY70YHkz6hFn1yAebVvq_9OfANkVWEzDC9wEGZCl0d0'
const RANDOM_IMAGE = 'https://api.unsplash.com/users/quochaiduong73/likes/?client_id=DY70YHkz6hFn1yAebVvq_9OfANkVWEzDC9wEGZCl0d0&per_page=100'


import SHOP_INFO from '../../model/ShopInfo'


export const getShoes = async () => {
    try {
        const res = await axios.get(API_GETSHOES)
        if (res.data.status === 200) {
            return res.data
        } return false
    } catch (error) {
        console.error(error);
    }
}

export const searchShoes = async (name) => {
    try {
        const res = await axios.get(API_SEARCHSHOES + name);
        if (res) {
            return res.data
        } return false
    } catch (error) {
        console.error(error);
    }
}
export const detailShoe = async (id) => {
    try {
        const res = await axios.get(API_DETAILSHOES + id);
        if (res) {
            return res.data
        } return false
    } catch (error) {
        console.error(error);
    }
}
export const addShoe = async (shoe) => {
    const iShop = Math.floor(Math.random() * 5);
    const rating = Math.floor(Math.random() * 5) + 1;
    const total_rated = Math.floor(Math.random() * 50) + 1;
    const shop_info = SHOP_INFO[iShop]
    try {
        const res = await axios.post(API_ADDSHOES, {
            name: shoe.name,
            price: shoe.price,
            images: shoe.images,
            price_promotion: shoe.price_promotion,
            shop_info: shop_info,
            order_count: shoe.price_promotion,
            description: shoe.description,
            rating: rating,
            total_rated: total_rated
        })
        return res.data
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const updateShoe = async (shoe) => {
    try {
        const res = await axios.patch(API_UPDATESHOE + shoe._id, {
            name: shoe.name,
            price: shoe.price,
            images: shoe.images,
            price_promotion: shoe.price_promotion,
            shop_info: shoe.shop_info,
            order_count: shoe.price_promotion,
            description: shoe.description,
            rating: shoe.rating,
            total_rated: shoe.total_rated
        })
        return res.data
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const deleteShoe = async (id) => {
    try {
        console.log(API_DELETESHOE + id);
        const res = await axios.delete(API_DELETESHOE + id);
        console.log(res.data)
        return res.data
    } catch (error) {
        console.error(error);
    }
}

export const randomIamge = async () => {
    try {
        const res = await axios.get(RANDOM_IMAGE);
        if (res) {
            console.log(res.data.length)
            const iRandom = Math.floor(Math.random() * res.data.length);
            console.log(iRandom)
            const image = res.data[iRandom];
            console.log(image.urls.full);
            return image
        } else return false
    } catch (error) {
        console.error(error);
    }
}


