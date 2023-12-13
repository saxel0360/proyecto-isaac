import { Carrusel } from './Carrusel'
import { Footer } from './Footer'
import platos from '../assets/platosTipicos.mp4'
import '../estilos/Section.css'
import { Formulario } from './Formulario'
import mapa from '../assets/mapa.png'
export const Section = () => {
    return (
        <>
            <Carrusel />
            <section className="padre">
                <div className="izquierda">
                    <div className="platos">
                        <video src={platos} controls className="video" />
                    </div>
                    <div className="sugerencia">
                        <h2>RECOMENDACIONES</h2>
                        <p>Podria ver los soguientes videos de YouTube para poder aprender mas de la gastronomia de Bolivia</p>
                        <ul>
                            <li>
                                <a href="https://www.youtube.com/watch?v=dFTuBR02Imw">Platillos tipicos de Bolivia</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/shorts/Dggnmfz5yfA">Comida Cochala</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=0TPOGutywms">Comida interesante de Bolivia?</a>
                            </li>
                        </ul>
                        <img src={mapa} className="mapa"/>
                    </div>
                </div>
                <div className="derecha">
                    <div className="aside">
                        <p>
                            La Gastronomía en el país es conocida principalmente por su variedad de platos típicos
                            que se presentan en Bolivia estas varían de zona en zona. Con profundas raíces español-moriscas
                            e indígenas, transformadas por el mestizaje y los diferentes momentos históricos que el país
                            ha experimentado, la gastronomía boliviana ha sumado una amplia gama de platos y recetas,
                            lo cual la hace variada, rica y diferenciada. A esto se le suman las bebidas como el vino
                            boliviano y la Chicha
                        </p>
                        <p>
                            Las recetas bolivianas conservan nuestras tradiciones de platos criollos,
                            pero el ajetreado ritmo de vida de este nuevo siglo, está haciendo que muchas
                            de nuestras costumbres de cocinar en casa y comer comida criolla, desaparezcan.
                            Estamos olvidando los nombres de muchos platos típicos, del altiplano,
                            los valles, los llanos y el chaco boliviano, que nuestros antepasados nombraron
                            con sus lenguas originarias (como el aimara, quechua, guaraní, etc.)
                            e incluso estamos olvidando de cómo se preparaban.
                        </p>

                    </div>
                </div>
            </section>
            <Formulario />
            <Footer />
        </>
    )
}
