import axios from 'axios'

export const baseUrl: string = "https://jsonplaceholder.typicode.com"

export const fetcher = (url: string): any => axios.get(url).then((res) => res.data);
