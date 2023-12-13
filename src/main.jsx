import React from 'react'
import ReactDOM from 'react-dom/client'
import { Menu } from './componentes/Menu'
import { Carrusel } from './componentes/Carrusel'
import { Footer } from './componentes/Footer'
import '../src/estilos/prin.css'
import { Section } from './componentes/Section'
import { Route, Routes } from 'react-router-dom'
import {LaPaz} from '../src/componentes/LaPaz'
/* import {Potosi} from '../src/componentes/Potosi' */

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <Menu/>
    <Carrusel/>
    <Section/>
    <Footer/> */}
  </React.StrictMode>,
)
