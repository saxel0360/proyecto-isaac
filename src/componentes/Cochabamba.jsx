import '../estilos/LaPaz.css'
import { Footer } from './Footer'
/* imagenes izquierda */
import Silpancho from '../assets/Comidas/Cochabamba/Psilpancho.jpg'
import Piquemacho from '../assets/Comidas/Cochabamba/Ppiquemacho.webp'
import Falsoconjeo from '../assets/Comidas/Cochabamba/PconejoFalso.jpeg'
/* imagenes derecha */
import Charquetaka from '../assets/Comidas/Cochabamba/pCharqueTaka.jpg'
import Chicharron from '../assets/Comidas/Cochabamba/Pchicharron.jpg'
import Habaspejtu from '../assets/Comidas/Cochabamba/PhabasPejtu.jpg'
import Jakalawa from '../assets/Comidas/Cochabamba/PjakaLawa.jpg'
import Pampaku from '../assets/Comidas/Cochabamba/Ppampaku.jpg'
import Pichon from '../assets/Comidas/Cochabamba/Ppichon.jpg'
/* bootstrap */
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
export const Cochabamba = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 main">
            <div className="cont-platos fondo-ch">
              <h1 className='titulos'>SILPANCHO</h1>
              <p>
                El Silpancho es una plato típico de Bolivia, exactamente del departamento de Cochabamba.
                Este plato no tiene más de 60 años desde que se preparó por primera vez. El silpancho o sillp’anchu es un plato emblemático de la cocina boliviana.
                Su nombre proviene del quechua, un idioma que también se habla en Perú, en los Andes, el sur de Colombia y el noroeste de Argentina. Significa plano y delgado, como el bistec que cubre este plato. Se compone de arroz, papas fritas, un lonja circular de carne frita de vaca apanada y uno o dos huevos. Se llena un plato de arroz graneado. La papa frita va en rodajas servida a un costado del plato, luego se cubre con la carne frita -que cubre la mayor parte del plato-. La ensalada compuesta de cebolla con tomate en cubos pequeños y el huevo frito, van en la parte superior, (otras variantes llevan también Zanahoria). Opcionalmente si el comensal lo sugiere, suele servirse con locoto en cuadritos ya sea en la misma ensalada o en otro pequeño recipiente a parte
              </p>
              <img src={Silpancho} className='img-iz' />
              <h1 className='titulos'>PIQUE MACHO</h1>
              <p>
                El Pique Macho es un plato típico, representativo y comercial de Cochabamba. Es conocido por sus grandes y suculentas raciones. Es una delicia. Su origen se remonta al año 1974, al Restaurante Miraflores, de los esposos Honorato Quiñones Andia y Evangelina Rojas Vargas. En Bolivia, el nombre oficial lo dieron los pilotos del Lloyd Aéreo Boliviano en un comentario circunstancial.
                El Pique Macho fue una creación colectiva de los comensales que frecuentábamos el Restaurante Miraflores, por entonces ubicado en El Prado. Sencillamente pedíamos carne picada con papas fritas y locotos cortados transversalmente, para que inciten más la sed. De allí parece haberse emparentado con el intendente Orureño, por la cantidad de carnes y menudencias que hoy exhibe, para compartir entre amigos o la familia.
              </p>
              <img src={Piquemacho} className='img-iz' />
              <h1 className='titulos'>FALSO CONEJO</h1>
              <p>
                El falso conejo es un platillo típico de Bolivia. Llevando una presentación completa y un matiz de sabores clásicos de la región, ha resultado ser uno de los favoritos de los comensales. Es que, debemos aceptar que el ahogado es la estrella junto a la carne que lo lleva de manto y que todos los demás ingredientes encajan perfectamente.
                Según los historiadores de la gastronomía boliviana, este platillo habría nacido a principios del siglo XX (en la época colonial), de aquellas familias que vivían en las haciendas del norte del departamento de La Paz. Como la mayoría de los patillos, se fue esparciendo por los demás departamentos y al mismo tiempo, adquiriendo nuevos sabores típicos de cada región hasta llegar a las versiones que conocemos hoy en día.
                Sin embargo, no es un platillo inventado desde cero, más bien se desprendió del “Lambreado de Conejo”, que en realidad sí llevaba como proteína la carne de conejo, pero como no era un alimento de tanta disponibilidad, habría sido reemplazado en la receta por carne de res, por ello el nombre de falso conejo.
              </p>
              <img src={Falsoconjeo} className='img-iz' />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 cont-platos">
            <h3 className='titulos'>Otros Platos del Departamento</h3>
            <div className="card cartas carta-body">
              <img src={Charquetaka} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.recetas.com.bo/receta/charque-taka-cochabambino" target="_blank"><button type="button" className="btn btn-warning">Charque Taka</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Chicharron} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.recetas.com.bo/content/chicharron" target="_blank"><button type="button" className="btn btn-warning">Chicharron</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Habaspejtu} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://gastronomiabolivia.com/pejtu-de-habas/" target="_blank"><button type="button" className="btn btn-warning">Habas Pajtu</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Jakalawa} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://azafranbolivia.com/?p=29214" target="_blank"><button type="button" className="btn btn-warning">Jaka Lawa</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Pampaku} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://patujutricolor.org/pampaku/" target="_blank"><button type="button" className="btn btn-warning">Pampaku</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Pichon} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.opinion.com.bo/articulo/revista-asi/delicia-pichon-cliza-mundo/20210102111100802091.html" target="_blank"><button type="button" className="btn btn-warning">Pichon</button></a></p>
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
                <Card.Title className='titulo-c-a'>Silpancho</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>½ kilogramo de Carne blanda sin grasa ni nervios</li>
                        <li>10 Huevos estrellados</li>
                        <li>3 kilogramos de Papa</li>
                        <li>5 tazas de Pan molido</li>
                        <li>5 tazas de Pan molido</li>
                        <li>5 tazas de Pan molido</li>
                        <li>5 tazas de Arroz graneado cocido</li>
                        <li>1 ½ taza de Aceite para freír silpanchos y papas</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Corte contra el hilo los pedazos de carne. Condiméntelos con sal y pimienta.</li>
                        <li>Paso 2: En un batán o mortero, estire la carne cubierta con pan molido,golpeándola hasta que quede grande y casi transparente.</li>
                        <li>Paso 3: En una olla haga cocer las papas peladas con agua y sal, hasta que estén blandas pero no desechas; escurra y parta cada papa en 4 rodajas más o menos.</li>
                        <li>Paso 4: Caliente la mitad del aceite en una sartén grande y retueste las papas ligeramente, escúrralas en una fuente cubierta con servilletas de papel.</li>
                        <li>Paso 5: En el mismo aceite en que doró las papas, fría los trozos de carne una por una.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=RyyWzN1aet8" target="_blank" className='carta-enla'>Sillpancho Cochabambino</a></li>
                        <li><a href="https://www.youtube.com/watch?v=YjXAlCQz3EE" target="_blank" className='carta-enla'>SILPANCHO RECETA FACIL</a></li>
                        <li><a href="https://www.youtube.com/watch?v=j7EiRD94d1I" target="_blank" className='carta-enla'>COMO HACER SILPANCHO </a></li>
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
                <Card.Title className='titulo-c-a'>Pique macho</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 kilogramo de Lomo</li>
                        <li>½ kilogramo de</li>
                        <li>Salchichas</li>
                        <li>8 Papas medianas</li>
                        <li>4 Cebollas grandes</li>
                        <li>2 Tomates medianos</li>
                        <li>8 Locotos</li>
                        <li>Aceite</li>
                        <li>Pimienta molida</li>
                        <li>Comino</li>
                        <li>Ajo molido</li>
                        <li>1 pizca de Sal</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Corta la carne en pedazos pequeños y condimentala con sal, el ajo, la pimienta y el comino a gusto.</li>
                        <li>Paso 2: Pica el locoto en cuadraditos pequeños y saltea en la sarten con un poco de aceite caliente, con la cebolla picada en pluma, el tomate en cuadraditos y una pizca de sal.</li>
                        <li>Paso 3: Aparte, fríe la carne tapándola para obtener una carne jugosa.</li>
                        <li>Paso 4: Dora las papas en aceite, cortalas en pedazos largos.</li>
                        <li>Paso 5: Mezcla todo y agrega las salchichas picadas en rodajas y las papas fritas.</li>
                        <li>Paso 6: Mezcla todo y agrega las salchichas picadas en rodajas, y las papas fritas.</li>
                        <li>Paso 7: Sirve adornando con trozos de locoto crudo picado en tiras largas.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=xbyvpohMRU4" target="_blank" className='carta-enla'>RECETA DE PIQUE MACHO</a></li>
                        <li><a href="https://www.youtube.com/watch?v=yzVzHDnqKvc" target="_blank" className='carta-enla'>PIQUE MACHO - al estilo de Cochabamba</a></li>
                        <li><a href="https://www.youtube.com/watch?v=YvCkSU0aKhM" target="_blank" className='carta-enla'>como HACER PIQUE MACHO BOLIVIANO</a></li>
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
                <Card.Title className='titulo-c-a'>Falso Conejo</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>¾ kilogramo de Carne de res</li>
                        <li>1 taza de Arvejas peladas</li>
                        <li>4 Vainas de aji amarillo molido</li>
                        <li>½ cucharilla de Comino</li>
                        <li>½ cucharilla de Pimienta</li>
                        <li>1 taza de Pan molido</li>
                        <li>2 Cebollas</li>
                        <li>1 Diente de ajo finamente picado</li>
                        <li>12 Papas</li>
                        <li>Aceite</li>
                        <li>1 pizca de Sal</li>
                        <li>1 cucharilla de Orégano</li>
                        <li>2 Tomates</li>
                        <li>1 cuchara de Perejil finamente picado</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Picar menuda la cebolla, luego freirla en poco aceite hasta que este transparente.</li>
                        <li>Paso 2: Añadir ají amarillo, ajo, pimenta, comino, orégano. Cocer 5 min. Luego agregar las arvejas y 4 tazas de agua dejar cocer hasta que las arvejas esten suaves.</li>
                        <li>Paso 3: Aparte cortar la carne en filetes y pasarla por pan molido, aplastando con una moroca.</li>
                        <li>Paso 4: Freir los apanados con aceite y pasarlos al guisado. Deje cocer de 5 a 10 min.</li>
                        <li>Paso 5: Prepare la sarsa, picar la cebolla pluma, el tomate en cuadritos.</li>
                        <li>Paso 6: Aderezar con sal y aceite. Servir el falso conejo, acompañado de papas con sarsa por encima.</li>
                        <li>Paso 7: Decorar con perejil</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=c2PQ-kAHB8o" target="_blank" className='carta-enla'>Falso conejo* plato típico de Bolivia*</a></li>
                        <li><a href="https://www.youtube.com/watch?v=kZ8xWGyBNKY" target="_blank" className='carta-enla'>Falso Conejo - Cochabambino</a></li>
                        <li><a href="https://www.youtube.com/watch?v=UuRpB81J6f8" target="_blank" className='carta-enla'>Falso Conejo</a></li>                      </ul>
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
