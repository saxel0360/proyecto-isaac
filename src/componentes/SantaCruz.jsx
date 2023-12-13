import '../estilos/LaPaz.css'
import { Footer } from './Footer'
/* imagenes izquierda */
import Locro from '../assets/Comidas/Scz/Plocro.jpg'
import Majao from '../assets/Comidas/Scz/Pmajao.jpg'
import Zonzo from '../assets/Comidas/Scz/Pzonzo.jpg'
/* imagens derecha */
import Asadoyuca from '../assets/Comidas/Scz/PasadoYuca.webp'
import Cuñape from '../assets/Comidas/Scz/Pcuñape.jpg'
import Jochipintao from '../assets/Comidas/Scz/PjochiPintao.jpg'
import Kjaras from '../assets/Comidas/Scz/Pkjaras.jpg'
import Pacumutu from '../assets/Comidas/Scz/Ppacumutu.jpg'
import Sopayuca from '../assets/Comidas/SCZ/psopaYuca.webp'
/* bootstrap */
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
export const SantaCruz = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 main">
            <div className="cont-platos fondo-scz">
              <h1 className='titulos'>MAJAO</h1>
              <p>
                Ni 'majadito', ni 'majau'. Su nombre original es majao, del verbo majar que significa moler. Te compartimos un poco de la historia y la receta de este plato que se ha convertido en todo un símbolo de la cruceñidad.
                La comida típica cruceña tiene sus orígenes durante la conquista es pañola en el oriente boliviano. El “majao” es uno de los platos más emblemáticos de Santa Cruz. Su nombre deriva del verbo español “majar” que significa literalmente moler.
              </p>
              <img src={Majao} className='img-iz' />
              <h1 className='titulos'>ZONZO</h1>
              <p>
                Para hablar de sonso, primero debemos hablar de la yuca. Esta llegó al oriente boliviano gracias a los nativos arawak, quienes la trajeron desde las islas del Caribe aproximadamente 500 años antes de la llegada de los españoles a Bolivia. El cultivo del arbusto en el que crece su consumo se extendió hacia los territorios aledaños, en donde se convirtió en uno de los principales ingredientes de su gastronomía tradicional.
                Asimismo, fue utilizada en muchos platillos alrededor de América Latina, en donde se la prepara con la sazón típica de cada comunidad y se la llama de diferente manera. Se sabe que la yuca cruda contiene toxinas (ácido cianhídrico) que pueden ser perjudiciales y que en grandes cantidades pueden causar algunos problemas para la salud.
                Ahora, ¿por qué su nombre? Tampoco se tiene una respeuesta adecuada para ello, pero como sabes, la palabra “sonso” en Bolivia es un homónimo que es bastante usado por los habitantes para referirse a alguien poco listo o usarlo como un sinónimo de tonto.
              </p>
              <img src={Zonzo} className='img-iz' />
              <h1 className='titulos'>LOCRO</h1>
              <p>
                El locro es uno de los platos más representativos de la cocina del oriente boliviano. Es la comida que se servían los integrantes de las caravanas que se trasladaban en carretones de un pueblo a otro en las extensas llanuras de  los departamentos de Santa Cruz, Beni y Pando, desde el siglo XVII hasta mediados del siglo pasado.
                Las travesías eran largas y penosas, cruzaban selvas, pampas, ríos y curichis. Y cuando llegaba la hora de alimentarse, las mujeres alistaban sus ollas, el charque, el arroz, el plátano y la yuca y preparaban la comida. Los hombres traían el agua y la leña para cocinar, y así nació el locro carretero, que saciaba el hambre y calentaba el cuerpo en épocas de surazos.
                Con el paso del tiempo y la integración de Santa Cruz al interior del país llegaron algunos ingredientes más, que se le agregaron a la olla del locro, sobre todo en los pueblos y en la ciudad capital. La papa y la cebolla se mezclaron para agregarle sabor, lo mismo que la gallina; el urucú para darle color y algo de aceite.
              </p>
              <img src={Locro} className='img-iz' />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 cont-platos">
            <h3 className='titulos'>Otros Platos del Departamento</h3>
            <div className="card cartas carta-body">
              <img src={Asadoyuca} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="" target="_blank"><button type="button" className="btn btn-warning">Asado de Yuca</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Cuñape} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="" target="_blank"><button type="button" className="btn btn-warning">Cuñape</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Jochipintao} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="" target="_blank"><button type="button" className="btn btn-warning">Jochi Pintao</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Kjaras} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="" target="_blank"><button type="button" className="btn btn-warning">Kjaras</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Pacumutu} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="" target="_blank"><button type="button" className="btn btn-warning">Pacumutu</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Sopayuca} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="" target="_blank"><button type="button" className="btn btn-warning">Sopa de Yuca</button></a></p>
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
                <Card.Title className='titulo-c-a'>Majao</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>5 tazas de Agua</li>
                        <li>½ kilogramo de Charque</li>
                        <li>1 taza de Arroz</li>
                        <li>½ taza de Cebolla picada fina (sin lavar)</li>
                        <li>½ taza de Tomate pelado y picado fino</li>
                        <li>¼ cucharilla de Sal</li>
                        <li>½ taza de Aceite</li>
                        <li>4 Semillas de urucú</li>
                        <li>(achiote) remojadas en agua</li>
                        <li>½ taza de Agua o caldo</li>
                        <li>1 cucharilla de Sal</li>
                        <li>½ Plátano de cocinar frito, por persona</li>
                        <li>2 Tajadas yuca cocida y frita, por persona</li>
                        <li>1 Huevo frito, por persona</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1:Poner en una olla las cinco tazas de agua, cuando esté hirviendo agregar el charque y dejar cocer hasta que esté suave, sacar, martajar y desmenuzar.</li>
                        <li>Paso 2: Al agua donde hirvió el charque anadir el arroz y la sal, dejar cocer a fuego moderado por veinticinco minutos más o menos hasta que esté muy bien cocido, pero no seco.</li>
                        <li>Paso 3: Poner en una cacerola pequeña a fuego fuerte la cuarta taza de aceite, agregar el charque desmenuzado, freír hasta que esté dorado y sacar del fuego.</li>
                        <li>Paso 4: Poner la cuarta taza de aceite restante a fuego fuerte en una cacerola, agregar la cebolla, dejar dorar un rato, añadir el tomate, luego agregar el color del urucú colado, agua o caldo y la sal. Dejar cocer unos cinco minutos, poner el charque frito, mezclar y agregar a la olla del arroz, mezclar todo, no debe quedar seco.</li>
                        <li>Paso 5: Servir caliente, con el huevo frito encima, el medio plátano frito y la yuca tambien frita.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=FeFXSaYuxJw" target="_blank" className='carta-enla'>Majadito Tostado</a></li>
                        <li><a href="https://www.youtube.com/watch?v=wbOBTLZ_0uc" target="_blank" className='carta-enla'>COMO PREPARAR MAJADITO</a></li>
                        <li><a href="https://www.youtube.com/watch?v=iDN3eODhkDI" target="_blank" className='carta-enla'>MAJADITO BATIDO</a></li>
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
                <Card.Title className='titulo-c-a'>Zonzo</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Un kilo de yuca</li>
                        <li>Un kilo de queso blanco rallado</li>
                        <li>Una cucharadita de aceite o mantequilla</li>
                        <li>Sal al gusto, por lo general esta receta no lleva casi sal (ingrediente opcional)</li>
                        <li>1 o 2 huevos, si desea que su sonso tenga mayor consistencia al momento de amasar la yuca (ingrediente opcional)</li>
                        <li>Un poco de leche para cuando se esté amasando la yuca (ingrediente opcional)</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Primero debe cocinar la yuca en agua con sal, solamente sacar del agua hasta que esté blanda. Posteriormente se deberá sacar y colocar a escurrir para eliminar el exceso de agua.</li>
                        <li>Paso 2: Ralle el queso.</li>
                        <li>Paso 3: Una vez que haya sacado y escurrido la yuca, comiéncela a amasar hasta que parezca un puré, para que esta masa pueda ser mezclada con el queso rallado.</li>
                        <li>Paso 4: Cuando haya mezclado la masa de la yuca con el queso rallado debe agregar el aceite o mantequilla (según sea su gusto).</li>
                        <li>Paso 5: Debe tener cuidado de no agregar los tallos y el corazón de la yuca, debido a que de no hacerlo podría ser molesto al comer su sonso y poco estético</li>
                        <li>Paso 6: Agregue un poco de sal y mézclelo todo, procure que mantenga su consistencia de masa.</li>
                        <li>Paso 7: Si agregó algunos de los ingredientes opcionales deberá seguir amasando hasta que quede homogéneo.</li>
                        <li>Paso 8: Tomar el puré y hacer bolitas del aproximadamente el tamaño de su puño.</li>
                        <li>Paso 9: En esta ocasión como se realizará un sonso al sartén deberá hacer: Una vez hecha la masa deberá agarrar las bolitas y aplastarlas en el sartén hasta que queden de forma circular para así freírlos como si fuese un tortilla.</li>
                        <li>Paso 10: Se recomienda que el grosor de su sonso no pase de un dedo.</li>
                        <li>Paso 11: Déjelos en el sartén con un poquito de aceite hasta que estos agarren un color dorado.</li>
                        <li>Paso 12: Cuando se estén dorados por ambos lados, deberá retirarlos y dejarlos enfriar.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=1snmBleEewo" target="_blank" className='carta-enla'>SONSO DE YUCA</a></li>
                        <li><a href="https://www.youtube.com/watch?v=q4k_O0CT78M" target="_blank" className='carta-enla'>Zonzo de yuca</a></li>
                        <li><a href="https://www.youtube.com/watch?v=i9l6A3g_EKA" target="_blank" className='carta-enla'>Sonso de Yuca - Receta boliviana tradicional</a></li>
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
                <Card.Title className='titulo-c-a'>Locro</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 gallina  (recomendable gallina criolla  roja)</li>
                        <li>2 tazas de arroz</li>
                        <li>3 litros de agua</li>
                        <li>6 papas imillas</li>
                        <li>¼ taza de aceite</li>
                        <li>Cebolla</li>
                        <li>Pimentón</li>
                        <li>Colorante</li>
                        <li>Sal</li>
                        <li>Huevos</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Poner en una olla con fuego el agua, despresar la gallina y freírla con un poco de aceite, cebolla y pimentón picados</li>
                        <li>Paso 2: cuando las presas estén doradas, ponerlas en otra olla con agua y hacer hervir y cuidar que las presas no se deshagan.</li>
                        <li>Paso 3: luego de 25 minutos  agregar arroz, papa picadas, el colorante y la sal estar atento que</li>
                        <li>Paso 4: el arroz esté a punto, romper los huevos en la misma olla.</li>
                        <li>Paso 5: El locro de carne de res se prepara de la misma forma que el locro de gallina, remplazando la gallina por carne o charque, y las papas por yuca.</li>
                        <li>Paso 6: servirlo  y recuerda con llajua todo es mas rico.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=BF7BevB201U" target="_blank" className='carta-enla'>Locro de Pollo</a></li>
                        <li><a href="https://www.youtube.com/watch?v=io0oeAMRxMc" target="_blank" className='carta-enla'>Cocina Locro</a></li>
                        <li><a href="https://www.youtube.com/watch?v=kUpr-Q6RDr8" target="_blank" className='carta-enla'>Cómo preparar LOCRO</a></li>
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
