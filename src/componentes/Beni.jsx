import '../estilos/LaPaz.css'
import { Footer } from "./Footer"
/* imagenes izquierda */
import Pacufrito from '../assets/Comidas/Beni/PpacuFrito.jpg'
import Masako from '../assets/Comidas/Beni/Pmasako.jpg'
import Keperi from '../assets/Comidas/Beni/Pkeperi.jpg'
/* imagenes derecha */
import Caldobagre from '../assets/Comidas/Beni/PcaldoBagre.jpg'
import Chive from '../assets/Comidas/Beni/Pchive.jpg'
import Chorizobeniano from '../assets/Comidas/Beni/PchorizoBeniano.jpg'
import Sopapiraña from '../assets/Comidas/Beni/PsopaPiraña.jpg'
import Surubihorno from '../assets/Comidas/Beni/PsurubiHorno.jpg'
import Tortillahuevopeta from '../assets/Comidas/Beni/PtortillaHuevoPeta.jpg'

/* bootstrap */
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
export const Beni = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 main">
            <div className="cont-platos fondo-bn">
              <h1 className='titulos'>MASACO</h1>
              <p>
                De acuerdo con la preparación tradicional, el masaco contiene los carbohidratos mencionados cocidos que luego son aplastados en tacú, un mortero de gran tamaño generalmente hecho de tronco excavado típico de la región oriental. Luego de formar una masa con lo que resultó de alguno de estos (que además puede ser combinado con queso o incluso diferentes carnes) y se le da una forma de medallón de un grosor considerable o adquiere la de un molde elegido previamente.
                Estas masas también pueden estar hechas de arroz o maíz, dependiendo el gusto de cada familia. Asimismo, existen preparaciones alternativas con otros tipos de mortero. No obstante, pueden ser finalmente fritas, horneadas, cocidas a las brasas o simplemente cocidas en agua con anterioridad.
              </p>
              <img src={Masako} className='img-iz' />
              <h1 className='titulos'>PACU FRITO</h1>
              <p>
                El Keperí es un plato típico de Bolivia, especialmente popular en los departamentos del Pando y de Santa Cruz. Su nombre se deriva del corte de carne utilizado en su preparación.
                El corte de carne utilizado para el Keperí se encuentra entre la paleta y la costilla de la res, y cuando se prepara adecuadamente, se caracteriza por ser delicioso y suave.
                El plato se elabora principalmente con carne de res, específicamente utilizando un corte llamado "Keperí", que generalmente es una pieza de carne jugosa y tierna. La carne se sazona con una mezcla de especias y se cocina a la parrilla o a la brasa, lo que le da un sabor ahumado y distintivo.
                Uno de los aspectos clave es la maceración, que puede realizarse de diferentes formas.
              </p>
              <img src={Pacufrito} className='img-iz' />
              <h1 className='titulos'>KEPERI BENIANO</h1>
              <p>
                El Pacú es uno de los peces muy preferidos de la gastronomía Boliviana,  aquí te enseñamos como preparar pacú frito, pacú a la parrilla o también Pacú al horno en papel aluminio de cualquier forma que lo prepares es toda una delicia acompañado con papas fritas, o mote con su limón  y mote   un mangar.
                muchos me comentaron que depende mucho del lugar,  yo lo probé el pacú del chapare  muy deli, pero me comentaron que es otro nivel el pacú  frito beniano es otro nivel, la clave esta que lo pongas limón para darle mas sabor.
              </p>
              <img src={Keperi} className='img-iz' />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 cont-platos">
            <h3 className='titulos'>Otros Platos del Departamento</h3>
            <div className="card cartas carta-body">
              <img src={Caldobagre} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.recetasnestle.com.mx/recetas/comidas-caldo-bagre-pescado" target="_blank"><button type="button" className="btn btn-warning">Caldo de Bagre</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Chive} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.cipca.org.bo/analisis-y-opinion/reportajes/el-chive-un-producto-hecho-con-manos-de-mujeres-de-beni" target="_blank"><button type="button" className="btn btn-warning">Chive</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Chorizobeniano} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.recetas.com.bo/receta/chorizo-beniano-como-preparar" target="_blank"><button type="button" className="btn btn-warning">Chorizo Beniano</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Sopapiraña} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.cocina-boliviana.com/recetas/sopas/sopa-de-piranas" target="_blank"><button type="button" className="btn btn-warning">Sopa de Piraña</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Surubihorno} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.bolivia.com/el-sabor-de-bolivia/asi-sabe-bolivia/surubi-al-horno-r1168" target="_blank"><button type="button" className="btn btn-warning">Surubi al Horno</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Tortillahuevopeta} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://bolivia.com/el-sabor-de-bolivia/asi-sabe-bolivia/tortilla-de-huevo-de-peta-plato-tipico-de-beni-bolivia-r1240" target="_blank"><button type="button" className="btn btn-warning">Tortilla de Huevo de Peta</button></a></p>
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
                <Card.Title className='titulo-c-a'>Masaco</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 kilogramo de Plátanos bien maduros</li>
                        <li>½ kilogramo de Charque o carne de res</li>
                        <li>½ kilogramo de Queso</li>
                        <li>1 pizca de Sal</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Primero poner a cocer el charque bien lavado hasta que esté bien blando, moler y desmenuzarlo, o si es carne cortarla en cubitos pequeños y sofreiría hasta que estén crujientes.</li>
                        <li>Paso 2: Rallar el queso.</li>
                        <li>Paso 3: Luego poner a cocer los plátanos hasta que estén bien blandos, con su cascara, una vez que estén blandos quitarles la cascara y molerlos en el tacú junto con la carne y el queso, agregarle sal a gusto </li>
                        <li>Paso 4: También se puede hacer con los plátanos fritos, se cortan en láminas como de 1 cm y se fritan y luego se muelen, o si lo desea lo puede hacer con plátanos verdes o si lo prefiere los puede mezclar mitad verde y mitad maduros, eso ya depende del gusto de cada persona.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=K-v1XRtoLrY" target="_blank" className='carta-enla'>Masaco de Plátano</a></li>
                        <li><a href="https://www.youtube.com/watch?v=czox3Sa4vws" target="_blank" className='carta-enla'>Masaco de Yuca</a></li>
                        <li><a href="https://www.youtube.com/watch?v=8XEWge4X6U0" target="_blank" className='carta-enla'>MASACO DE PLATANO MADURO CON QUESO!</a></li>
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
                <Card.Title className='titulo-c-a'>Pacu Frito</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 kilogramo de Filetes de pacu</li>
                        <li>5 Dientes de ajo</li>
                        <li>Miga de pan rallado</li>
                        <li>Aceite</li>
                        <li>1 pizca de Sal</li>
                        <li>1 pizca de Pimienta</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Condimentar los filetes de pescado con sal y pimienta.</li>
                        <li>Paso 2: Colocar los filetes en un bol y añadirle el ajo triturado y jugo de limón. Marinar por 30 minutos.</li>
                        <li>Paso 3: Freír los filetes en aceite bien caliente, hasta que queden bien dorados y con la cubierta crocante.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=3_jJ5B2E8Ik" target="_blank" className='carta-enla'>PACU FRITO - Cocinero Sebastian Daza</a></li>
                        <li><a href="https://www.youtube.com/watch?v=7RqIeIhbS8s" target="_blank" className='carta-enla'>PACÚ</a></li>
                        <li><a href="https://www.youtube.com/watch?v=yxEh3HtHA3Q" target="_blank" className='carta-enla'>COMO PREPARAR PESCADO FRITO (PACU)</a></li>
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
                <Card.Title className='titulo-c-a'>Keperi Beniano</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>2 kilogramos de Keperi tierno</li>
                        <li>¾ taza de Jugo de limón</li>
                        <li>1 litro de Agua</li>
                        <li>1 pizca de Sal</li>
                        <li>1 pizca de Pimienta</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Preparar un marinado con el jugo de limón, sal, comino y pimienta.</li>
                        <li>Paso 2: Colocar la pieza de keperi en una fuente y bañarlo con el marinado. Tapar y dejar en reposo unas tres horas.</li>
                        <li>Paso 3: Transcurrido el tiempo, colocar el agua en la fuente y taparla con papel de aluminio.</li>
                        <li>Paso 4: Hornear a fuego bajo por unas tres horas, voltee la pieza y cocinar por 45 a 60 minutos más. Retire el papel y deje que la pieza se dore por ambos lados durante unos 20 minutos aproximadamente.</li>
                        <li>Paso 5: Servir acompañado de arroz, yuca frita, ensalada de vegetales y llajuas de su preferencia.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=tZ7y6ftRyMI" target="_blank" className='carta-enla'>keperi Beniano </a></li>
                        <li><a href="https://www.youtube.com/watch?v=u6nhqOlxJLk" target="_blank" className='carta-enla'>Como Preparar Keperí al Horno y Arroz con Queso</a></li>
                        <li><a href="https://www.youtube.com/watch?v=gEQ-bOSMBWM" target="_blank" className='carta-enla'>keperi</a></li>
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
