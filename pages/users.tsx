import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

import { fetchUsers, User } from '../services/user'

const UserList: NextPage = () => {
    const [users, setUsers] = useState<User[]>([])

    const getUsers = useCallback(async () => {
        const result = await fetchUsers()
        setUsers(result)
    }, [setUsers])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return (
        <section>
            <h2>User list</h2>
            { users.map(user =>
                <p key={user.id}>{user.name}</p>)
            }
        </section>
    )
}

export default UserList
