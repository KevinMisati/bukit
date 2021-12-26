import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://bv-online-assessment.herokuapp.com/api/bookings/',
    timeout:50000,
    headers: {
        'Content-Type':'application/json',
        'accept'      :'application/json'
    }
})

export default axiosInstance