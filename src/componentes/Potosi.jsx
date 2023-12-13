/* componentes */
import '../estilos/LaPaz.css'
import { Footer } from './Footer'
/* imagenes izquierda */
import Chajchu from '../assets/Comidas/Potosi/Pchajchu.jpg'
import kalapurka from '../assets/Comidas/Potosi/Pkalapurka.jpg'
import Patasca from '../assets/Comidas/Potosi/Ppatasca.jpg'
/* imagenes derecha */
import Achacana from '../assets/Comidas/Potosi/PajiAchacana.jpg'
import Palqui from '../assets/Comidas/Potosi/PajiPalqui.jpg'
import Chapu from '../assets/Comidas/Potosi/PchapuMinero.jpg'
import LawaQuinua from '../assets/Comidas/Potosi/PlawaQuinua.jpg'
import Pescadocachi from '../assets/Comidas/Potosi/Ppescadocachichuño.jpg'
import Puchero from '../assets/Comidas/Potosi/Ppuchero.jpg'
/* bootstrap */
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
export const Potosi = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 main">
            <div className="cont-platos fondo-pt">
              <h1 className='titulos'>KALAPURKA</h1>
              <p>
                Uno de los platillos más exóticos es la kalapurka, elaborado con harina de trigo retostada y cocida con piedra caliente.
                Historiadores locales colocan a la kalapurka entre los preparados coloniales nacidos en el área rural del departamento de Potosí. Señalan que los nativos preparaban sus alimentos con piedras calientes incluso antes de la aparición de la cerámica, en recipientes cerrados que permitían contener el agua como las cestas de cuero, calabaza o madera, durante el periodo arcaico, 8000 a. C.
                Hoy, se mantiene en lo estructural la preparación de la kalapurka como una lawa cocinada con las piedras calentadas en brasas ardientes.
                En los restaurantes, se sirve en platos de barro cocido y con una piedra volcánica calentada en el fuego. Da la impresión de que se está frente a la boca de un volcán en erupción.
              </p>
              <img src={kalapurka} className='img-iz' />
              <h1 className='titulos'>CHAJCHU</h1>
              <p>
                Éste increíble plato de la cocina boliviana, derrocha tradicionalismo en su preparación y significado. La palabra ‘’Chajchu’’ viene de la palabra Quechua que significa ‘’rociar’’, haciendo alusión a la forma de servir este platillo. No podrás resistirte al aroma y a lo suculento qué luce en su plato servido este Chajchu Potosino.
                La historia del Chajchu parte de la cocina tradicional de Potosí, y tradicionalmente se lo preparaba antes de una larga jornada laboral por la fuerte variedad de ingredientes enérgicos. Suele confundirse con el Pique Macho ya que son muy similares entre sí.
              </p>
              <img src={Chajchu} className='img-iz' />
              <h1 className='titulos'>PATASCA</h1>
              <p>
                Con la llegada de los españoles a Bolivia, la gastronomía sufrió muchos cambios. Los españoles trataron de imponer sus costumbres introduciendo cría de animales y el cultivo de ciertas especias. Sin embargo los platos de la comida local, han permanecido de forma intocable. Hoy te vamos a hablar de un plato qué no es la excepción: Ají de Pataska.
                El Ají de Pataska es un guiso muy eficaz a la hora de calentar el cuerpo. En Tarija por ejemplo, además de implementarlo en épocas invernales, lo consumen y disfrutan después de las fiestas de año nuevo. Plato totalmente autóctono sin ninguna dudas éste Ají de Pataska lo debes probar si quieres entrar en los rincones más puros de Bolivia.
              </p>
              <img src={Patasca} className='img-iz' />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 cont-platos">
            <h3 className='titulos'>Otros Platos del Departamento</h3>
            <div className="card cartas carta-body">
              <img src={Achacana} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://es.wikipedia.org/wiki/Aj%C3%AD_de_achakana" target="_blank"><button type="button" className="btn btn-warning">Achakana</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Palqui} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://azafranbolivia.com/?p=26538" target="_blank"><button type="button" className="btn btn-warning">Aji de Palqui</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Chapu} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://correodelsur.com/ecos/20190908_potosi-tiene-8-platos-bandera.html" target="_blank"><button type="button" className="btn btn-warning">Chapu Minero</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={LawaQuinua} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.eldiario.net/portal/2023/05/31/lawa-de-quinua-y-chicharron/" target="_blank"><button type="button" className="btn btn-warning">Lawa de Quinua</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Pescadocachi} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://calendariosaboresbolivia.com/2018/03/13/pescado-con-cachi-chuno/" target="_blank"><button type="button" className="btn btn-warning">Pescado con Cachi Chuño</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Puchero} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.cocina-boliviana.com/recetas/plato-principal/puchero-potosino" target="_blank"><button type="button" className="btn btn-warning">Puchero</button></a></p>
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
                <Card.Title className='titulo-c-a'>Kalapurka</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 kilogramo de Carne o charque de res</li>
                        <li>Piedras volcánicas</li>
                        <li>8 Papas variedad</li>
                        <li>½ libra de Harina</li>
                        <li>¼ libra de Harina de maíz blanco</li>
                        <li>1 Cebolla</li>
                        <li>2 Ajos</li>
                        <li>Ají colorado molido</li>
                        <li>Orégano, sal, comino y pimienta</li>
                        <li>Piedras volcánicas</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Calentar las piedras volcánicas al fuego vivo, en brasas, empleando cocinas de las que se usan en parrillas</li>
                        <li>Paso 2: Cocinar carne o charque, eventualmente empleando una olla a presión para acelerar el proceso. Suavizar la carne hasta que permita ser deshilada, y dejar reposar el preparado</li>
                        <li>Paso 3: Freír en aceite el ajo y cebolla, añadir el ají, sal, comino y pimienta. Cocinar hasta que se seque el aceite, junto con el charque. Agregar las papas al charque así cocinado</li>
                        <li>Paso 4: Mezclar las dos clases de harina y diluirlas con un poco de agua o caldo de la preparación  previa. Verter este contenido a la olla cuando las papas estén hervidas</li>
                        <li>Paso 5: Cuandoi se compruebe que todo esté mezclado, apagar la cocina e introducir las piedras calientes en la olla.</li>
                        <li>Paso 6: Servir en platos de barro hondos, usualmente introduciendo también una piedra caliente a cada plato, al punto que la sopa espesa se presente como burbujeante. Agregar perejil u otra especia.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=F0tNbt-VLoY" target="_blank" className='carta-enla'>KALAPURKA </a></li>
                        <li><a href="https://www.youtube.com/watch?v=DKvGDiUxZOI" target="_blank" className='carta-enla'>receta “Kalapurka”</a></li>
                        <li><a href="https://www.youtube.com/watch?v=oa5y3jq_tIQ" target="_blank" className='carta-enla'>Kalapurka - Gastronomía andina aymara</a></li>
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
                <Card.Title className='titulo-c-a'>Chajchu</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 kilogramo de Carne de res</li>
                        <li>8 Papas</li>
                        <li>300 gramos de Chuño remojado</li>
                        <li>100 gramos de Habas peladas</li>
                        <li>4 Huevos</li>
                        <li>2 Quesillos</li>
                        <li>1 Cebolla</li>
                        <li>2 Cebollas verdes</li>
                        <li>1 Tomate</li>
                        <li>1 Locoto (ají o chile</li>
                        <li>redondeado)</li>
                        <li>1 Ramita de quirquiña</li>
                        <li>250 gramos de Ají rojo, cocido</li>
                        <li>1 pizca de Sal</li>
                        <li>1 pizca de Pimienta</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Cocinar en uno y medio litros de agua a fuego medio, junto con la carne fileteada, la cebolla y sal, para darle sabor y aroma a la carne de res. Esta cocción toma aproximadamente una hora</li>
                        <li>Paso 2: Cuando el agua se haya evaporado en parte y la carne esté cocida, retirar del fuego para reservarla y filtrar esta sopa para eliminar los restos de cebolla</li>
                        <li>Paso 3: Machucar la carne, sin despedazarla. Una vez que tenga el fondo limpio, ponerla a cocer nuevamente, agregando  el resto de los ingredientes, . empezando por la papa entera previamente pelada, luego el chuño, y finalmente las habas, minutos antes de retirar el preparado del fuego.</li>
                        <li>Paso 4: Una vez que la papa esté cocida, agregar la cebolla verde, picada en trozos delgados de 5 cm., y darle un hervor rápido para ablandarla. Retirar toda la preparación del fuego.</li>
                        <li>Paso 5: Si áun quedan residuos sólidos de los ingredientes, filtrar este caldo y reservarlo.</li>
                        <li>Paso 6: Preparar el ají, calentando en aceite a fuego medio el ají, algo del caldo de res y sal. Mezclar y cocinar hasta que se reduzca el volumen de agua y quede una salsa algo espesa</li>
                        <li>Paso 7: Mientras se realiza la preparación anterior, hacer la ensalada con la cebolla blanca, tomate, el locoto y la quirquiña</li>
                        <li>Paso 8: Servir la comida utilizando platos de cerámica. Comenzar vertiendo  la papa, chuño y las habas. La cebolla verde debe quedar encima para ornamentar el plato. Posteriormente, colocar encima las carnes machucadas y echarles la salsa de ají rojo, al gusto. Continuar esta ornamentación de cada plato con tajadas de quesillo fresco y huevos duros, cortados en rodajas, alternando una tajada de cada uno. Por último, colocar la ensalada arriba</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=9qofq0jmK6M" target="_blank" className='carta-enla'>Chajchu Potosino</a></li>
                        <li><a href="https://www.youtube.com/watch?v=LUS5WjzkvEA" target="_blank" className='carta-enla'>Preparamos chajchu potosino</a></li>
                        <li><a href="https://www.youtube.com/watch?v=UWuJQDcmuso" target="_blank" className='carta-enla'>Receta de Chajchu, un plato típico de Potosí</a></li>
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
                <Card.Title className='titulo-c-a'>Aji de Patashka</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>3 kilogramos de Carne de res</li>
                        <li>250 gramos de Maíz pelado</li>
                        <li>1 Cabeza de cerdo</li>
                        <li>2 Cebollas blancas</li>
                        <li>1 Amarro de cebolla verde</li>
                        <li>1 Amarro de apio</li>
                        <li>40 gramos de Comino molido</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Cocinar en una olla grande la cabeza de cerdo, junto con maíz remojado y las verduras.</li>
                        <li>Paso 2: Hacer hervir durante muy largo tiempo (generalmente toda la noche) hasta que el maíz esté cocido</li>
                        <li>Paso 3: Agregar la carne de res y nuevamente hacer hervir, hasta que esté muy blanda. Condimentar con comino y ajo.</li>
                        <li>Paso 4: Servir los platos, agregando cebollita verde</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=t0k3y3QdCFk" target="_blank" className='carta-enla'>PATASCA | El Arte Culinario</a></li>
                        <li><a href="https://www.youtube.com/watch?v=K3MJe3WqdsM" target="_blank" className='carta-enla'>Patasca</a></li>
                        <li><a href="https://www.youtube.com/watch?v=NLWotXXeeeU" target="_blank" className='carta-enla'>Patasca Tradicional</a></li>
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
