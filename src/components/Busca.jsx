import { useState, useEffect } from 'react'
import Axios from 'axios'

export function Busca() {
    const [repositorios, setRepositorio] = useState([])
    const [termoBuscado, setTermoBuscado] = useState('')
    const [repositorioFiltrado, setRepositorioFiltrado] = useState ([])
    
    const baseURL = 'https://api.github.com/users/mouragra/repos'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setRepositorio(response.data)
        }
        getData()
        console.log(repositorios)
    }, [])

    function buscaMostrada(event) {
        setTermoBuscado(event.target.value)
    }

    useEffect (() => {
        const filtered = repositorios.filter(respositorio => {
            return respositorio.name.includes(termoBuscado)
        })
        setRepositorioFiltrado(filtered)
    }, [repositorios, termoBuscado])
    
    return (
        <div>
            <input placeholder="Digite no nome do repositório" onChange={buscaMostrada} />
            {termoBuscado && repositorioFiltrado.map(repositorio => {
                return (
                    <p key={repositorio.name}>{repositorio.name}</p>
                )
            })}
        </div>
    )
}
