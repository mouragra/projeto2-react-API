import { useState, useEffect } from 'react'
import Axios from 'axios'

export function Repositorios() {
    const [reposFromApi, setReposFromApi] = useState([])
    const baseURL = 'https://api.github.com/users/mouragra/repos'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setReposFromApi(response.data)

        }
        getData()
    }, [])

    return (
        <div>
            {reposFromApi.map(item => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>

                )

            }
            )}
        </div>
    )
}