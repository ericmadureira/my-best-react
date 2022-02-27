import { baseUrl, fetcher } from "services/apiFetch";

const userListUrl: string = `${baseUrl}/users`
export interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: number
        lng: number
      }
    },
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
}

export const fetchUsers = async () => {
	const users = await fetcher(userListUrl)
	return users
}
