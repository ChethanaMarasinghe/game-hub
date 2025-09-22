import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0241bd6a3ced496189280089433377b6'
    }
})