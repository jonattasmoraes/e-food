import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductMenu from './pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Menu" element={<ProductMenu />} />
  </Routes>
)

export default Rotas
