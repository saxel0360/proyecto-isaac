import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LaPaz } from './componentes/LaPaz'
import { Oruro } from './componentes/Oruro'
import { Potosi } from './componentes/Potosi'
import { Pando } from './componentes/Pando'
import { Beni } from './componentes/Beni'
import { SantaCruz } from './componentes/SantaCruz'
import { Cochabamba } from './componentes/Cochabamba'
import { Sucre } from './componentes/Sucre'
import { Tarija } from './componentes/Tarija'
import { Section } from './componentes/Section'
import { Menu } from './componentes/Menu'
import { Creditos } from './componentes/Creditos'
function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}>
            <Route index element={<Section/>}/>
            <Route path='LaPaz' element={<LaPaz/>}/>
            <Route path='Oruro' element={<Oruro/>}/>
            <Route path='Potosi' element={<Potosi/>}/>
            <Route path='Pando' element={<Pando/>}/>
            <Route path='Beni' element={<Beni/>}/>
            <Route path='SantaCruz' element={<SantaCruz/>}/>
            <Route path='Cocha' element={<Cochabamba/>}/>
            <Route path='Chuqui' element={<Sucre/>}/>
            <Route path='Tarija' element={<Tarija/>}/>
            <Route path='Creditos' element={<Creditos/>}/>
          </Route>
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
