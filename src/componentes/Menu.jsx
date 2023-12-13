import '../estilos/Menu.css'
import logo from '../assets/IMG/fondoNegroBOL.png'
import lapaz from '../assets/IMG/LaPaz.png'
import oruro from '../assets/IMG/Oruro.png'
import potosi from '../assets/IMG/Potosi.png'
import pando from '../assets/IMG/Pando.svg'
import beni from '../assets/IMG/Beni.svg'
import scz from '../assets/IMG/SCZ.png'
import cocha from '../assets/IMG/cocha.png'
import chuqui from '../assets/IMG/sucre.svg'
import tarija from '../assets/IMG/tarija.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom'
export const Menu = () => {
    return (
        <>
            <header>
                <Navbar expand="xl" className="bg-body-tertiary fondo">
                    <Container fluid>
                        <Navbar.Brand href="#home"><img src={logo} className="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav as={Link} to="/" className='inicio'>Inicio</Nav>
                                <Nav as={Link} to='/Lapaz' className='pestañas'><img src={lapaz} className="banderas" />La Paz</Nav>
                                <Nav as={Link} to='/Oruro' className='pestañas'><img src={oruro} className="banderas" />Oruro</Nav>
                                <Nav as={Link} to='/Potosi' className='pestañas'><img src={potosi} className="banderas" />Potosi</Nav>
                                <Nav as={Link} to='/Pando' className='pestañas'><img src={pando} className="banderas" />Pando</Nav>
                                <Nav as={Link} to='/Beni' className='pestañas'><img src={beni} className="banderas" />Beni</Nav>
                                <Nav as={Link} to='/SantaCruz' className='pestañas'><img src={scz} className="banderas" />Santa Cruz</Nav>
                                <Nav as={Link} to='/Cocha' className='pestañas'><img src={cocha} className="banderas" />Cochabamba</Nav>
                                <Nav as={Link} to='/Chuqui' className='pestañas'><img src={chuqui} className="banderas" />chuquisaca</Nav>
                                <Nav as={Link} to='/Tarija' className='pestañas'><img src={tarija} className="banderas" />Tarija</Nav>
                                <Nav as={Link} to="/Creditos" className='inicio'>Creditos</Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* <nav className="navbar navbar-expand-xl bg-body-tertiary fondo">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="https://images.app.goo.gl/wYasoj3oj2hzSq9i7" target="_blank"><img src={logo} className="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link inicio" aria-current="page">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pestañas" aria-current="page" ><img src={lapaz} className="banderas" />La Paz</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pestañas" aria-current="page"><img src={potosi} className="banderas" /> Potosi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pestañas" aria-current="page" href="#"><img src={oruro} className="banderas" /> Oruro</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pestañas" aria-current="page" href="#"><img src={pando} className="banderas" /> Pando</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pestañas" aria-current="page" href="#"><img src={beni} className="banderas" /> Beni</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pestañas" aria-current="page" href="#"><img src={scz} className="banderas" /> Santa Cruz</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pestañas" aria-current="page" href="#"><img src={cocha} className="banderas" /> Cochabamba</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pestañas" aria-current="page" href="#"><img src={chuqui} className="banderas" /> Chuquisaca</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pestañas" aria-current="page" href="#"><img src={tarija} className="banderas" /> Tarija</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </header>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}
