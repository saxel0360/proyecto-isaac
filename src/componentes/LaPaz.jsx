
import '../estilos/LaPaz.css'
import Ppaceño from '../assets/Comidas/Ppaceño.jpg'
import Pfricase from '../assets/Comidas/Pfricasé.jpg'
import Pchairo from '../assets/Comidas/Pchairo.jpg'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { Footer } from './Footer';
import Pjakonta from '../assets/Comidas/Pjakhonta.jpg'
import Pthimpu from '../assets/Comidas/Pthimpu.jpg'
import Phuarjata from '../assets/Comidas/Phuarjata.jpg'
import Phumacha from '../assets/Comidas/Phumacha.jpg'
import Pncerdo from '../assets/Comidas/Pncerdo.jpg'
import Ppicana from '../assets/Comidas/Ppicana.jpg'

export const LaPaz = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 main">
            <div className="cont-platos fondo-lp">
              <h1 className='titulos'>PLATO PACEÑO</h1>
              <p>
                El plato paceño es uno de los
                sabores más representativos del
                departamento de La Paz. Aunque su
                composición es bastante sencilla,
                lleva por detrás vestigios de la
                historia de esta región y un gran
                simbolismo para los comensales. Eso
                sí, no existe una prueba específica
                de su origen, por lo que se conocen
                distintas versiones que varían un poco
                entre ellas.
                En la primera se presume que nació en
                el año 1781 en el que la ciudad paceña
                fue liberada del cerco liderado por Túpac
                Katari y Bartolina Sisa a manos de uno de
                los comandantes. Este personaje, en el
                camino, habría recolectado alimentos
                típicos del territorio andino como
                papas, habas y queso para llevar a
                los pobladores que morían de hambre
                por la escasez, dado que el cerco
                duró más de tres meses.
              </p>
              <img src={Ppaceño} className='img-iz'/>
              <h1 className='titulos'>FRICASE</h1>
              <p>
                El fricasé es un plato bastante popular en Bolivia, no obstante
                tiene su origen en Francia. La etimología de su nombre proviene de
                la voz francesa “fricasseé” puede darnos a entender de qué se trata:
                frire (freír) y casser (romper).
                El fricasseé de Francia consiste en un preparado de carne, verduras y
                champiñones previamente salteados y acompañados con una salsa blanca en
                base a huevos.
                Respecto al plato francés el fricasé boliviano remplaza la salsa en
                base a huevos por un caldo picante de ají colorado, acompañado de chuño
                y mote. Del mismo modo, se excluyen muchas verduras y se añade la carne
                de cerdo, en muchas ocasiones cocida y en otras frita o salteada en su
                misma grasa.
                El consumo de este plato forma parte de las celebraciones de año nuevo
                y es comercializado como plato “levanta muertos” o curador de resacas.
                Los festejos de fin de año suelen promocionar sus eventos incluyendo
                un plato de “fricasé al amanecer”.
              </p>
              <img src={Pfricase} className='img-iz'/>
              <h1 className='titulos'>CHAIRO</h1>
              <p>
                El chairo es una sopa mestiza que inicia su camino en la historia
                de la gastronomía charquense (el territorio que hoy se llama Bolivia)
                en el siglo XVIII.
                Lo más probable es que durante esta época y con motivo del primer
                y el segundo cerco de la ciudad de La Paz, el chairo, haya tomado su
                carta de ciudadanía en esta querida ciudad, seguramente al inicio en
                forma de “chupe” y/o “uchu”, para más adelante tomar su forma definitiva
                Haciendo una revisión detallada de sus ingredientes, se puede comprobar
                que por lo menos 10 de los 13 productos que la componen, son artículos
                comestibles que los Españoles trajeron a la América. Si calculamos que
                los Españoles llegaron al altiplano boliviano actual, en el año 1532, s
                eguramente tardaron en aclimatar los productos que trajeron, enseñar su
                uso y hacer una costumbre de su consumo. Este período de FUSIÓN duraría
                unos 100 años y ya estamos en el siglo XVII.
              </p>
              <img src={Pchairo} className='img-iz'/>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 cont-platos">
            <h3 className='titulos'>Otros Platos del Departamento</h3>
            <div className="card cartas carta-body">
              <img src={Phumacha} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://patujutricolor.org/queso-humacha/" target="_blank"><button type="button" className="btn btn-warning">Queso Humacha</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Phuarjata} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
              <p className="card-text"><a href="https://www.recetas.com.bo/content/huarjata" target="_blank"><button type="button" className="btn btn-warning">Huarjata</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Pjakonta} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
              <p className="card-text"><a href="https://recetasdebolivia.com/receta-de-jakonta/" target="_blank"><button type="button" className="btn btn-warning">Jakhonta</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Pncerdo} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
              <p className="card-text"><a href="https://platostipicosdelapaz.com/platos-tipicos/nudos-de-cerdo/" target="_blank"><button type="button" className="btn btn-warning">Nudos de Cerdo</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Pthimpu} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
              <p className="card-text"><a href="https://www.bolivianita.de/es/pages/recetas-thimpu-boliviano" target="_blank"><button type="button" className="btn btn-warning">Thimpu</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Ppicana} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
              <p className="card-text"><a href="https://gastronomiabolivia.com/picana-navidena/" target="_blank"><button type="button" className="btn btn-warning">Picana</button></a></p>
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
                <Card.Title className='titulo-c-a'>Plato Paceño</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>5 libras haba con cáscara (para tres platos)</li>
                        <li>1/2 kg. De carne (bife, pulpa, bistec)</li>
                        <li>6 papas (para tres platos)</li>
                        <li>6 choclos</li>
                        <li>1 queso</li>
                        <li>1 botellita soya</li>
                        <li>Azúcar</li>
                        <li>Para la llajua (aji picante)</li>
                        <li>1/2 libra tomate</li>
                        <li>2 locotos (picante)</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Lavar bien la haba sin pelar y sin sacar de la cáscara y colocar en una olla con agua y hacer hervir (mejor si es en olla a presión)</li>
                        <li>Paso 2: Lavar la papa y no pelar, mejor si es papá con cáscara roja, colocar en una olla con agua (mejor si es en olla a presión)</li>
                        <li>Paso 3: Para el choclo o maíz 🌽, en una olla mejor si es a presión, 2 litros de agua y agregar azúcar, 2 cucharas y media por litro de agua. Una vez que el agua esté hirviendo recién colocar el maíz o choclo, y hacer cocer por lo menos 40 minutos</li>
                        <li>Paso 4: Para la carne, yo lo ablando con papaya, colocando una capa de papaya y luego al sartén con salsa soya, pimienta, y comino al gusto, cocinar a fuego lento o mínimo para que salga jugo de la carne</li>
                        <li>Paso 5: Con el mismo jugo de la carne, cocinar dos tiras de queso 🧀</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=Q7cyBFPwqB0" target="_blank" className='carta-enla'>Plato Paceño (a la leña)</a></li>
                        <li><a href="https://www.youtube.com/watch?v=bc3_i0IKKE8" target="_blank" className='carta-enla'>PLATO PACEÑO RECETA BOLIVIANA</a></li>
                        <li><a href="https://www.youtube.com/watch?v=fEMnWPRmcmM" target="_blank" className='carta-enla'>PLATO PACEÑO ALASITA</a></li>
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
                <Card.Title className='titulo-c-a'>Fricase</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 kilogramo de Carne de cerdo</li>
                        <li>3 tazas de Chuño remojado y pelado</li>
                        <li>1 kilogramo de Maíz cocido</li>
                        <li>1 cucharilla de Pimienta y ajo</li>
                        <li>1 cuchara de Sal molida</li>
                        <li>1 Ramita de hierba buena</li>
                        <li>3 Ajies amarillos en vaina</li>
                        <li>2 cucharas de Pan molido</li>
                        <li>3 Dientes de ajo picados finos</li>
                        <li>1 cuchara de Comino molido</li>
                        <li>1 litro de Agua</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Quitar las semillas del aji en vaina. Hecho esto, licuar las vainas de ají en agua suficiente, junto con 3 dientes de ajo.</li>
                        <li>Paso 2: Trocear la carne de cerdo en pedazos medianos, calculando que cada uno se destine a un plato.</li>
                        <li>Paso 3: Colocar los trozos de carne de cerdo  a la olla con agua y la ramita de hierba buena, condimentando con comino, pimienta, ajo en polvo, y una pizca de sal.</li>
                        <li>Paso 4: Cocinar durante 15 a 20 minutos, y luego agregar el mote y chuño pelado.</li>
                        <li>Paso 5: Es importante vigilar que en el transcurso del hervor del agua y su disminución, se debe agregar más agua previamente calentada en otra hornalla. En caso de que esté cocido y tenga mucho caldo, espesar la preparación con 2 cucharas de pan molido y 2 cucharas de afrecho.</li>
                        <li>Paso 6: Cuando la preparación está completa (verificarlo en la consistencia de la carne y demás ingredientes), debe removerse bien y terminar con una consistencia espesa. Para aumentarle esta consistencia, ir agregando pan molido.</li>
                        <li>Paso 7: Servir en platos hondos, preferiblemente de barro, acompañado de rodajitas de locoto (ají verde o amarillo) y un trozo de pan.en platillos adjuntos.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=x0CNslZsF7M" target="_blank" className='carta-enla'>Fricasé de Chancho - en casa</a></li>
                        <li><a href="https://www.youtube.com/watch?v=b_7tqoDS0zo" target="_blank" className='carta-enla'>Fricasé paceño de cerdo receta Boliviana</a></li>
                        <li><a href="https://www.youtube.com/watch?v=NBepVhfE_bs" target="_blank" className='carta-enla'>Fricasé Paceño</a></li>
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
                <Card.Title className='titulo-c-a'>Chairo</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>8 tazas de Agua</li>
                        <li>¼ kilogramo de Carne de vaca (cadera con hueso)</li>
                        <li>¼ kilogramo de Chalona (carne de cordero seca y salada)</li>
                        <li>1 cuchara de Sal</li>
                        <li>½ taza de Habas verdes peladas</li>
                        <li>½ taza de Arvejas verdes peladas</li>
                        <li>½ taza de Zanahoria pelada, picada en bastoncitos muy finos</li>
                        <li>4 tazas de Papa, pelada y picada en bastoncitos finos</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Para que el chairo no resulte agrio, el chuño debe remojarse una noche antes, pelar, martajar en batán y lavar muchas veces</li>
                        <li>Paso 2: En la olla en que se ha de cocinar el chairo, poner el agua a fuego fuerte y cuando apenas esté tibia, añadir la carne de vaca y la chalona; antes de que suelte a hervir, espumar y añadir la sal; dejar cocinar por lo menos una hora.</li>
                        <li>Paso 3: A este caldo agregar: las habas, arvejas, zanahorias y la papa, hacer hervir unos quince minutos, poner el chuño, dejar hervir otros cinco minutos y luego añadir el maiz blanco pelado cocido y el trigo mote pelado cocido, dejando cocinar el tiempo necesario hasta que la papa esté cocida.</li>
                        <li>Paso 4: En una olla pequeña poner la manteca o aceite a fuego fuerte y dorar la cebolla; anadir: el ají colorado, comino, orégano y pimienta; dejar cocer unos minutos y luego agregar al chairo esta salsa para que todo junto hierva unos diez minutos más.</li>
                        <li>Paso 5: Sacar la olla del fuego y agregar la cebolla verde, el perejil, orégano y hierbabuena.</li>
                        <li>Paso 6: Servir con un pedazo de carne de vaca y otro de chalona en cada plato.Tratar de mantener la cantidad inicial de caldo, si fuera preciso aumentar caldo o agua hirviendo para que no resulte muy espeso.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=4nmFCNTSHkc" target="_blank"  className='carta-enla'>Receta del Chairito</a></li>
                        <li><a href="https://www.youtube.com/watch?v=WNtqG18Vd5A" target="_blank"  className='carta-enla'>Como preparar sopa de Chairo</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9q1Ld4okxFU" target="_blank"  className='carta-enla'>Chairo Paceño</a></li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
