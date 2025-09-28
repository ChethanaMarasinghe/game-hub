import axios from 'axios';


export interface FetchResponse <T>{
    count: number;
    results: T[];
}
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0241bd6a3ced496189280089433377b6'
    }
})