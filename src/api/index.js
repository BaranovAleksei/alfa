import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://www.nbrb.by/api/exrates/'
})

export default axiosInstance