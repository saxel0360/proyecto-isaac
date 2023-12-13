import { Footer } from "./Footer"
import '../estilos/creditos.css'
import foto from '../assets/IMG/fotoPerfil.jpeg'
export const Creditos = () => {
  return (
    <>
      <div className="container-fluid padre">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h1 className="titulo-cred">AUTOR: </h1>
              <h2 className="datos-cred">ISAAC JOEL ILLATARCO ANAYA</h2>
              <h1 className="titulo-cred">CI: </h1>
              <h2 className="datos-cred">15982115</h2>
              <h1 className="titulo-cred">RU: </h1>
              <h2 className="datos-cred">1837758</h2>
              <h1 className="titulo-cred">CARRERA:</h1>
              <h2 className="datos-cred">INFORMATICA</h2>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 centro">
            <img src={foto} className="perfil"/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
