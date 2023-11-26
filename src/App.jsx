import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

import { Home} from './views/Home';
import { Contacto } from './views/Contacto';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element="Ruta no encontrada" />
      </Routes>
    </div>
  )
}

export default App
