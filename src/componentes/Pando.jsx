import '../estilos/LaPaz.css'
import { Footer } from './Footer'
/* imagenes izquierda */
import Empanada from '../assets/Comidas/Pando/PempanadaArroz.jpg'
import Locro from '../assets/Comidas/Pando/PlocroGallina.jpg'
import Chancho from '../assets/Comidas/Pando/PchanchoHorno.jpg'
/* imagenes derecha */
import Caldo from '../assets/Comidas/Pando/PcaldoTortuga.png'
import Carne from '../assets/Comidas/Pando/PcarneMoroco.jpg'
import Escabeche from '../assets/Comidas/Pando/PescabecheTorcaza.jpg'
import Farofa from '../assets/Comidas/Pando/Pfarofa.jpg'
import Pan from '../assets/Comidas/Pando/PpanArroz.jpeg'
import Sudado from '../assets/Comidas/Pando/PsudadoSurubi.webp'
/* bootstrap */
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
export const Pando = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 main">
            <div className="cont-platos fondo-pd">
              <h1 className='titulos'>LOCRO DE GALLINA</h1>
              <p>
                El locro es uno de los platos más representativos de la cocina del oriente boliviano. Es la comida que se servían los integrantes de las caravanas que se trasladaban en carretones de un pueblo a otro en las extensas llanuras de  los departamentos de Santa Cruz, Beni y Pando, desde el siglo XVII hasta mediados del siglo pasado.

                Las travesías eran largas y penosas, cruzaban selvas, pampas, ríos y curichis. Y cuando llegaba la hora de alimentarse, las mujeres alistaban sus ollas, el charque, el arroz, el plátano y la yuca y preparaban la comida. Los hombres traían el agua y la leña para cocinar, y así nació el locro carretero, que saciaba el hambre y calentaba el cuerpo en épocas de surazos.
              </p>
              <img src={Locro} className='img-iz' />
              <h1 className='titulos'>EMPANADA DE ARROZ</h1>
              <p>
                Una empanada es una fina masa de pan, masa quebrada u hojaldre rellena con una preparación salada o dulce y cocida al horno o frita. El relleno puede incluir carnes rojas o blancas, pescado, verduras o fruta. La masa, generalmente, es de harina de trigo –aunque también puede usarse harina de maíz u otros cereales– y suele llevar alguna grasa, aceite o manteca. Las empanadas son un plato tradicional de la mayoría de las cocinas de los países de habla hispana.
              </p>
              <img src={Empanada} className='img-iz' />
              <h1 className='titulos'>CHANCHO AL HORNO</h1>
              <p>
                En el siglo XVII, en los tradicionales hornos de leña se hacían allullas, bizcochos o pan. Pero había que aprovechar el calor. Entonces, las cocineras lo usaban para preparar carnes. Una de ellas era el cerdo. El origen del plato viene de un plato valenciano: el cochinillo, preparado en horno de leña. Uno de los sitios con más historia para este plato es Botín, en la calle madrileña de Cuchilleros, considerado el restaurante más antiguo del mundo.
                La receta original del cochinillo cambió al llegar a América, para convertirse en este alimento. Mientras el primero se marina con azafrán, vino, pimienta y clavo de olor, el segundo se adoba con chicha, cebolla, ajo y comino. Mucho comino. Pero el ingrediente que marca la diferencia es el achiote. Este se usa solamente en Ecuador.
              </p>
              <img src={Chancho} className='img-iz' />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 cont-platos">
            <h3 className='titulos'>Otros Platos del Departamento</h3>
            <div className="card cartas carta-body">
              <img src={Caldo} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.recetas.com.bo/content/caldo-de-tortuga" target="_blank"><button type="button" className="btn btn-warning">Caldo de Torruga</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Carne} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.eabolivia.com/blogs/23088-platos-tipicos-de-pando.html" target="_blank"><button type="button" className="btn btn-warning">Carne de Moroco</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Escabeche} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="" target="_blank"><button type="button" className="btn btn-warning">Escabeche de Torcaza</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Farofa} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://calendariosaboresbolivia.com/2018/03/27/farofa-con-charque/" target="_blank"><button type="button" className="btn btn-warning">Farofa</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Pan} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://gastronomiabolivia.com/pan-de-arroz/" target="_blank"><button type="button" className="btn btn-warning">Pan de Arroz</button></a></p>
              </div>
            </div>
            <div className="card cartas carta-body">
              <img src={Sudado} className="card-img-top img-cartas" alt="..." />
              <div className="card-body botones">
                <p className="card-text"><a href="https://www.cocina-boliviana.com/recetas/plato-principal/sudado-de-surubi" target="_blank"><button type="button" className="btn btn-warning">Sudado de Surubi</button></a></p>
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
                <Card.Title className='titulo-c-a'>Locro de Gallina</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 Gallina grande</li>
                        <li>½ taza de Arroz</li>
                        <li>½ Kilo de yuca</li>
                        <li>6 Papas</li>
                        <li>6 Huevos</li>
                        <li>4 Platanos de freir</li>
                        <li>1 Cebolla</li>
                        <li>1 Tomate</li>
                        <li>1 Diente de ajo</li>
                        <li>1 pizca de Sal</li>
                        <li>1 Tomate</li>
                        <li>1 Zanahoria</li>
                        <li> Cuchara de aji amarillo</li>
                        <li>1 cucharilla de Orégano</li>
                        <li>¼ cucharilla de Comino</li>
                        <li>1 pizca de Sal</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Despresa la gallina y hazla cocer en una olla con agua tibia junto con las verduras picadas y la sal, deja hervir hasta que la gallina esta casi cocida</li>
                        <li>Paso 2: En una sarten con aceite caliente frie las verduras picadas con los condimentos, agrega luego media taza de caldo de gallina, añadelo ala olla</li>
                        <li>Paso 3: Haz cocer en la misma olla el arroz, despues de unos cinco minutos añade la papa.</li>
                        <li>Paso 4: Cuando todo este cocido agrega uno a uno los huevos hasta que se vayan cuajando y retira del fuego.</li>
                        <li>Paso 5: Cocina la yuca pelada y cortada en trozos en una olla de agua con sal y agregala a la preparacion anterior.</li>
                        <li>Paso 6: Aparte cocina los platanos con cascara y partidos por la mitad.</li>
                        <li>Paso 7: Sirve en plato hondo con bastante caldo</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=BF7BevB201U" target="_blank" className='carta-enla'>Locro de Pollo</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9VyNxwOK9ik" target="_blank" className='carta-enla'>PREPARANDO LOCRO DE GALLINA</a></li>
                        <li><a href="https://www.youtube.com/watch?v=PxWwt3EDfDA" target="_blank" className='carta-enla'>LOCRO DE GALLINA-(PANDO)</a></li>
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
                <Card.Title className='titulo-c-a'>Empanada de Arroz</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 kg Yuca</li>
                        <li>800 gr Queso rallado</li>
                        <li>½ lt Leche</li>
                        <li>3 cdas Azúcar</li>
                        <li>1 cda Sal</li>
                        <li>200 gr Manteca</li>
                        <li>500 gr Harina de arroz</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Comenzar poniendo en una olla 1 litro de agua para cocinar la yuca, con la cucharada de sal hasta que este blandita. Ya la yuca blandita, quitar del fuego y separar un vaso del liquido</li>
                        <li>Paso 2: Poner la yuca en un recipiente y aplastar en caliente. Que quede como un puré. Puedes quitarle la fibra que tiene la yuca para que no sea tan dura. Luego, agregar la manteca, el azúcar. Cuando este bien mezclado agregar la harina de arroz. Volver a mezclar hasta formar una masa bien homogénea. Entonces colocar poco a poco la leche para que contribuya a formar esta masa. Tiene que quedar suave y un poco ligera.</li>
                        <li>Paso 3: Agregarle el queso cuando la masa este blandita. Agregar SOLO la mitad del queso y dejar reposar si preferimos un sabor mas potente, toda la noche.</li>
                        <li>Paso 4: En una cuchara agregar un poco de masa y volcar un poco sobre una bandeja con aceite. Poner arriba de la masa un poco de queso por cada bolita y tapar con un poco mas de masa. Y a esta masa de arriba, agregarle un toque mas de queso. Así sucesivamente llenar la bandeja.</li>
                        <li>Paso 5: Poner el horno a calentar a 250° C para cocinar nuestros panes y empanada de arroz. Tarda aproximadamente 18 minutos.</li>
                        <li>Paso 6: Estas empanadas se suelen tapar con hoja de plátano tradicionalmente, pero si no se consigue,</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=UJIRlYonMH0" target="_blank" className='carta-enla'>Empanada de Arroz</a></li>
                        <li><a href="https://www.youtube.com/watch?v=3SxGgdA74co" target="_blank" className='carta-enla'>Empanadas de arroz</a></li>
                        <li><a href="https://www.youtube.com/watch?v=seajVeby69k" target="_blank" className='carta-enla'>Empanadas de arroz con leche sin horno</a></li>
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
                <Card.Title className='titulo-c-a'>Chanco al Horno</Card.Title>
                <Accordion>
                  <Accordion.Item eventKey="0" className='carta-body'>
                    <Accordion.Header>Ingredientes</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>1 Pierna de Chancho deshuesada (también se puede usar Lechón)</li>
                        <li>Jugo de Naranja</li>
                        <li>Jugo de 2 Limones</li>
                        <li>2 cdras. Ajo</li>
                        <li>1 crda. Comino Molido</li>
                        <li>½ tz. Ají amarillo</li>
                        <li>½ cdra. Pimienta molida</li>
                        <li>3 cdras. Sal</li>
                        <li>2 Ramas de Romero</li>
                        <li>Aceite</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='carta-body'>
                    <Accordion.Header>Preparacion</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>Paso 1: Lava la carne de chancho y secala con cuidado. Ponla en infusión por 3 horas con el jugo de naranjas y limón. Aparte, tuesta los ajos con el comino. Mezclalos con el ají, la pimienta, la sal y el suficiente aceite para formar una pasta. Dejala reposar toda la noche en la refrigeradora.</li>
                        <li>Paso 2: Acomoda la carne en una fuente con las ramas de romero y una taza de agua; llévala a al horno a fuego medio (175°C) por 3 a 3 y 1/2 horas o hasta que la carne este cocida por dentro y dorada por fuera.</li>
                        <li>Paso 3: Retira la carne y desgrasa el jugo que soltó durante la cocción. Reserva.</li>
                        <li>Paso 4: Desgrasa la fuente con un poco de agua caliente. Forma una salsa suave con 2 cucharadas de grasa, 2 cucharadas de harina y entre 1 y 1/2 taza de jugo del cocimiento y el desgrasado. Cocina hasta que espese y hervir por 1 minuto.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='carta-body'>
                    <Accordion.Header>Videos de Explicación</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href="https://www.youtube.com/watch?v=rpr8x4nJzSo" target="_blank" className='carta-enla'> Preparar Panceta de Cerdo al Horno</a></li>
                        <li><a href="https://www.youtube.com/watch?v=oArxx0FEH1E" target="_blank" className='carta-enla'>CHANCHO AL HORNO</a></li>
                        <li><a href="https://www.youtube.com/watch?v=hLVxSUfDQpc" target="_blank" className='carta-enla'>Aprende a preparar un LECHON AL HORNO</a></li>
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
