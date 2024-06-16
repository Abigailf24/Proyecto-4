import { useState, useEffect } from 'react'
import Navbar from "../component/Navbar"

export const Producto = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://664aa905a300e8795d42889a.mockapi.io/productos").then(res => res.json())
            .then(res => {
                setData(res)
            })
        setLoading(false)
    }, [])



    return (
        <main>
            <Navbar />
            <h1 className = "text-center mb-4">Productos</h1>
            <div className = " d-flex flex-wrap justify-content-center gap-4" >
            {
                loading ? <h1>Cargando...</h1> : (
                    data?.map(producto => (
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={producto.image} className="card-img-top" alt="Placeholder" />
                            <div className="card-body">
                                <h5 className="card-title">{producto.name}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p className="card-text">{producto.precio}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))
                )
            }
            </div>
            
        </main>
    )
}

export default Producto

