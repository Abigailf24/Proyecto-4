
import { Link } from 'react-router-dom'
import Navbar from "../component/Navbar"

export const Contacto = () => {
  return (
    <main>
        <Navbar/>
        <h1>Contactos</h1>

        <Link to= "/">Ir a  Home</Link>
    </main>
  )
}

export default Contacto