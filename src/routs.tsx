import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductMenu from './pages/menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="menu/:id" element={<ProductMenu />} />
  </Routes>
)

export default Rotas
