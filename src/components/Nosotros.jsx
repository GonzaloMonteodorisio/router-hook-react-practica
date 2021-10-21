import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nosotros = () => {

    const [equipo, setEquipo] = useState([])

    // Para que se ejecute una sola vez el useEffect y no produzca un ciclo infinito, le agregamos , [] antes de cerrar el paréntesis 
    useEffect(() => {
        obtenerDatosUsuarios()
    }, [])

    const obtenerDatosUsuarios = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        setEquipo(users.civilizations)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
