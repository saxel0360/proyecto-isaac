import '../estilos/LaPaz.css'
import { Footer } from './Footer'
import Brazuelo from '../assets/Comidas/Oruro/Pbrazuelo.jpg'
import Rostro from '../assets/Comidas/Oruro/Prostro.jpg'
import Charquekan from '../assets/Comidas/Oruro/Pcharquekan.jpg'
/* cartas izquierda */
import Arroz from '../assets/Comidas/Oruro/ParrozLlamerada.jpg'
import Condori from '../assets/Comidas/Oruro/Pcondori.webp'
import Intendente from '../assets/Comidas/Oruro/Pintendente.jpg'
import Mechado from '../assets/Comidas/Oruro/PmechadoCordero.png'
import Pejerrey from '../assets/Comidas/Oruro/Ppajerrey.jpg'
import Revuelto from '../assets/Comidas/Oruro/PrevueltoCharque.jpg'
/* bootstrap */
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
export const Oruro = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 main">
            <div className="cont-platos fondo-oru">
              <h1 className='titulos'>ROSTRO ASADO</h1>
              <p>
                El rostro asado es un platillo de procedencia
                orureña hecho a base de la cabeza de cordero.
                Este forma parte de la vida de los comensales
                sobre todo en las madrugadas, resultando en un
                manjar, pero también en una tradición que forma
                parte de su increíble gastronomía.
                Su origen se remonta a la época de la colonia,
                en la cual los indígenas comercializaban la carne
                de cordero, quedándose solamente con las cabezas.
                Para no desperdiciarlas y tener alimento para el día,
                estos las cocinaban en los hornos de las panaderías
                de los tambos de la calle Murguía, donde se alojaban,
                luego de sacar la última ronda de panes de la jornada.
                Estas, entonces, eran comercializadas en horas de esa
                misma madrugada, específicamente al amanecer del día
                domingo en las largas mesas de la panadería con la
                buena compañía de una “uchú llajhua”, pan y un bajativo
                conocido como “matachancho” antes de irse a dormir para
                recuperar fuerzas.
              </p>
              <img src={Rostro} className='img-iz' />
              <h1 className='titulos'>BRAZUELO DE CORDERO</h1>
              <p>
                Cuando nos toca ser anfitriones de un evento con
                un cierto número de personas y no sabemos qué cocinar,
                resulta molesto. Uno tiende a pensar en el clásico
                ‘’asado’’ o ‘’parrillada’’, pero eso a veces cansa.
                En el artículo de hoy te queremos presentar un plato
                típico boliviano qué es muy fuerte y abundante,
                perfecto para qué satisfacer a todos los presentes.
                El tradicional Brazuelo de Cordero es un plato típico de Oruro,
                y se lo considera una joya de su riqueza gastronómica que
                se expande a nivel nacional. Para cocinar esta carne tan
                tierna, jugosa y delicada, se utilizan las patas
                delanteras del cordero, y esa es la característica
                distintiva de otros platos de Oruro como por ejemplo,
                el Mechado de Cordero (que se prepara con la pierna
                deshuesada del cordero)
              </p>
              <img src={Brazuelo} className='img-iz' />
              <h1 className='titulos'>CHARQUEKAN</h1>
              <p>
                Las recetas de sus ingredientes y preparado 
                abundan en Bolivia, incluso con charque de res 
                o de cordero. Sin embargo, hay poco escrito 
                sobre su origen. Algunos autores afirman que 
                nació en la comunidad de los Urus.
                Este plato se popularizó en las minas orureñas. 
                Los mineros, luego de su ardua jornada de 
                trabajo, salían cansados de los socavones y 
                lo primero que hacían era comer y la primera 
                oferta que hallaban era charque de llama con 
                mote.
                A este plato se le incorporó la papa con 
                cáscara (papahuayku) y el queso criollo, 
                de esa zona.
                Hasta que finalmente este plato se convirtió 
                en el famoso charquekán que ahora lleva también 
                huevo duro o pasado.
              </p>
              <img src={Charquekan} className='img-iz' />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 cont-platos">
            <h3 className='titulos'>Otros Platos del Departamento</h3>
            <div className="card cartas carta-body">
              <img src={Arroz} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.recetas.com.bo/contenido/arroz-llamerada-a-la-orurena" target="_blank"><button type="button" className="btn btn-warning">Arroz Llamerada</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Condori} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://sabores50.rssing.com/chan-17805794/article1404.html" target="_blank"><button type="button" className="btn btn-warning">Condori</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Intendente} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.recetas.com.bo/content/intendente" target="_blank"><button type="button" className="btn btn-warning">Intendente</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Mechado} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://recetasbolivianas.blogspot.com/2011/11/mechado-de-cordero.html" target="_blank"><button type="button" className="btn btn-warning">Mechado de Cordero</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Pejerrey} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://comidasbolivianass.com/bolivia/pejerrey-frito/" target="_blank"><button type="button" className="btn btn-warning">Pejerrey</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Revuelto} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.recetas.com.bo/contenido/revuelto-de-charque" target="_blank"><button type="button" className="btn btn-warning">Revuelto de Charque</button></a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br /><br /><br />
          </div>
        </div>
        <div className="row cart-abajo">
          <h1 className='titulos'>RECETAS</h1>
          <div className="col">
            <Card className='carta-body'>
              <Card.Body>
                <Card.Title className='titulo-c-a'>Rostro Asado</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>5 Cabezas de cordero (con lana)</li>
                        <li>5 Papas blancas</li>
                        <li>6 papas (para tres platos)</li>
                        <li>1 taza de Arroz</li>
                        <li>1 cuchara de Aceite</li>
                        <li>1 pizca de Sal</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Preparar las cabezas de oveja, limpiándolas escrupulosamente</li>
                        <li>Paso 2: Echar sal a todas las partes de la cabeza de cordero y ponerlo a hervir en agua</li>
                        <li>Paso 3: Sacar de la olla las cabezas de cordero, emplear otro recipiente y meter la preparacion dentro de un horno.</li>
                        <li>Paso 4: Hornear a temperatura media, hasta competar totalmente la cocción de la carne de cordero.</li>
                        <li>Paso 5: Entre tanto se horneen las cabezas de cordero, preparar arroz, haciéndolo hervir  en una olla con agua a media altura. En otra hornalla, o en la misma del arroz si fuera necesario, cocinar las papas previamente peladas</li>
                        <li>Paso 6: Sacar las cabezas de cordero del horno, y desprender la lana de las mismas (suele no completarse este procedimiento)</li>
                        <li>Paso 7: Servir los platos en recipiente grande. Una variante es consumirlo en sopa. Acompañar el plato con el arroz y las papas ya cocidas.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=J0ugQIC7dj8" target="_blank" className='carta-enla'>Rostro asado de res al horno de barro</a></li>
                        <li><a href="https://www.youtube.com/watch?v=u5zcW4CZdfE" target="_blank" className='carta-enla'>Rostro Asado bajo la Tierra</a></li>
                        <li><a href="https://www.youtube.com/watch?v=VIsL5Gl8hZc" target="_blank" className='carta-enla'>Receta de Cabezas de Cordero asada</a></li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className='carta-body'>
              <Card.Body>
                <Card.Title className='titulo-c-a'>Brazuelo de Cordero</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>4 presas de paleta de cordero</li>
                        <li>4 papas (para cocer o freír)</li>
                        <li>1 taza de arroz</li>
                        <li>Aceite</li>
                        <li>sal al gusto</li>
                        <li>2 cucharillas de pimienta entera</li>
                        <li>1 cucharilla de comino entero</li>
                        <li>3 dientes de ajo</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Lavar las paletas y llevarlas a una olla con agua y le añadimos sal a gusto junto a todos los demas ingredientes (ojo solo utilizar la mitad de estos) dejamos cocer por unos 20 a 25 minutos</li>
                        <li>Paso 2: Una vez cocido el cordero, sacar de la olla y aderezar con la otra mitad de los condimentos molidos. Dejar reposar mínimo durante 2 horas o más.</li>
                        <li>Paso 3: Antes de servir, colocar las paletas en una fuente para hornear untada con aceite y llevar a horno a temperatura moderada o en una sartén con aceite caliente dorar de ambos lados.</li>
                        <li>Paso 4: Hacer cocer las papas o freír (a gusto)</li>
                        <li>Paso 5: Hacer cocer el arroz</li>
                        <li>Paso 6: Servir las paletas, el arroz, la papa y encima adornar con sarza</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=dHXlvCGT0D4" target="_blank" className='carta-enla'>BRAZUELO DE CORDERO</a></li>
                        <li><a href="https://www.youtube.com/watch?v=2qwz94pyasU" target="_blank" className='carta-enla'>Brazuelo - Plato Orureño</a></li>
                        <li><a href="https://www.youtube.com/watch?v=c0I9jGn1vHQ" target="_blank" className='carta-enla'>Paletilla de cordero al horno</a></li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className='carta-body'>
              <Card.Body>
                <Card.Title className='titulo-c-a'>Charquekan</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>2 ½ libras de Carne de vacuno reseca en lonjas (charque)</li>
                        <li>1 ½ libra de Mote de maíz</li>
                        <li>5 Huevos</li>
                        <li>½ taza de Habas tiernas</li>
                        <li>12 Papas tamaño mediano</li>
                        <li>1 Queso</li>
                        <li>2 Cebollas</li>
                        <li>6 Vainas de ají colorado</li>
                        <li>5 Dientes de ajo</li>
                        <li>Aceite</li>
                        <li>½ cucharilla de Pimienta</li>
                        <li>1 pizca de Sal</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: En la noche previa a la preparación, poner el charque en un recipente hondo con agua fría, con el propósito de quitar el exceso de sal a la carne.</li>
                        <li>Paso 2: Para comenzar la preparación, escurrir el agua y lavar la carne. Machacarla un poco sobre una superficie dura, a fin de que quede casi desmenuzada</li>
                        <li>Paso 3: Freír el ají junto a la cebolla picada en trocitos en una cacerola. Agregar los aderezos junto a las habas (la pimienta y el ajo), terminando con el ají molido. Echar entre 4 y 6 vasos de agua y cocinar toda la preparación</li>
                        <li>Paso 4: Cuando las habas estén a medio cocer, echar el charque y cocinar hasta que el agua se consuma, y la preparación se torne casi seca, durante 20 a 25 minutos.</li>
                        <li>Paso 5: Verter las papas en agua caliente junto a los huevos, durante una media de 10 minutos, hasta que los huevos estén duros.</li>
                        <li>Paso 6: Servir la preparación, añadiendo el mote, las papas peladas y el huevo duro. Al final se pone el charque y el queso encima.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=ezJ0zDVzyHA" target="_blank" className='carta-enla'>CharqueKan Orureño </a></li>
                        <li><a href="https://www.youtube.com/watch?v=AaYfuWM4j3c" target="_blank" className='carta-enla'>Charquekan </a></li>
                        <li><a href="https://www.youtube.com/watch?v=4Yfz0DVUaPE" target="_blank" className='carta-enla'>Charquekan Orureño</a></li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

