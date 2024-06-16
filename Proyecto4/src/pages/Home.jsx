import { Link } from "react-router-dom"
import Navbar from "../component/Navbar"

export const Home = () => {
  return (

    <main>
        <Navbar/>
       <h1 className="text-center"> Bienvenidos a Home</h1>

       <Link to= "/contacto">Ir a Contactos</Link>
    </main>
  )
}

export default Home