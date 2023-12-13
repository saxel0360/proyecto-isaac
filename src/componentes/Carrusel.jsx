import '../estilos/Carrusel.css'
import potosi from '../assets/IMGCarru/paisajePotosi.webp'
import lapaz from '../assets/IMGCarru/paisajeLapaz.jpg'
import oruro from '../assets/IMGCarru/paisajeOruro.jpg'
import pando from '../assets/IMGCarru/paisajePando.jpg'
import beni from '../assets/IMGCarru/paisajeBeni.jpg'
import scz from '../assets/IMGCarru/paisajeSCZ.jpg'
import cocha from '../assets/IMGCarru/paisajeCochabamba.jpg'
import chuqui from '../assets/IMGCarru/paisajeSucre.jpg'
import tarija from '../assets/IMGCarru/paisajeTarija.jpg'
export const Carrusel = () => {
    return (
        <>
            <h1 className="titulo-prin">PLATOS TIPICOS DE BOLIVIA</h1>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={lapaz} className="d-block w-100 img-carru"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>La Paz</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={potosi} className="d-block w-100 img-carru"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Potosi</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={oruro} className="d-block w-100 img-carru"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Oruro</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pando} className="d-block w-100 img-carru"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Pando</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={beni} className="d-block w-100 img-carru"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Beni</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={scz} className="d-block w-100 img-carru"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Santa Cruz</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={cocha} className="d-block w-100 img-carru"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Cochabamba</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={chuqui} className="d-block w-100 img-carru"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Chuquisaca</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={tarija} className="d-block w-100 img-carru"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Tarija</h3>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
