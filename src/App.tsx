import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Rotas from './routs'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
