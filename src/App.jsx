import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Cart from './componentes/Cart/Cart'
import Home from './componentes/Home/Home'
import Talleres from './componentes/Talleres/Talleres'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Behind from './componentes/Behind/Behind'
import Contact from './componentes/Contact/Contact'
import Footer from './componentes/Footer/Footer'
import { CarritoProvider } from './Context/CarritoContext'

const App = () => {
  return (
    <>
      <CarritoProvider>
        <div id='/'>
          <NavBar />
        </div>
        <Home />
        <Talleres />
        <ItemListContainer />
        <Behind />
        <Contact />
        <Cart />
        <Footer />
      </CarritoProvider>
    </>
  )
}

export default App
