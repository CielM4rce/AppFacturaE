import React from "react";
import './home.css';
import Bienvenido from "../bienvenido/bienvenido.js";
import { Link, Route, Routes } from "react-router-dom";

function Home() {

    function hola(e){
        console.log(e.button)
        var sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle('active');
        var collapse = document.getElementById("sidebarCollapse");
        collapse.classList.toggle('active');
      };
    return (
        <div className="containerSidebar">
            <div className="bg-dark">
                <nav className="sidebar" id="sidebar">
                    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                        <Link to={"/"} className="align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <i className="bi bi-bootstrap-fill" style={{fontSize: '3em'}}/>
                            <span className="fs-4">Market Primo</span>
                        </Link>
                    </div>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link text-white" aria-current="page">
                                <i className="bi bi-house"></i>Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/FacturaElectronica"} className="nav-link text-white">
                                <i className="bi bi-files"></i>Factura Electronica
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link text-white collapsed" aria-current="page" data-bs-toggle="collapse" data-bs-target="#home-collapse">
                                <i className="bi bi-people"></i>Contactos
                            </Link>
                            <div className="collapse bg-dark" id="home-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to={"/Contactos"} className="dropdown-item rounded pl-3">Todos</Link></li>
                                    <li><Link to={"/Contactos/Clientes"} className="dropdown-item rounded">Clientes</Link></li>
                                    <li><Link to={"/Contactos/Proveedores"} className="dropdown-item rounded">Proveedores</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Inventario"} className="nav-link text-white">
                                <i className="bi bi-box-seam"></i>Inventario
                            </Link>
                        </li>
                        <li>
                            <Link to={"/Reportes"} className="nav-link text-white">
                                <i className="bi bi-graph-up"></i>Reportes
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="b-example-divider"></div>

            <div id="content">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" id="sidebarCollapse" className="btn navbar-btn sidebarCollapse" onClick={hola}  >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link"><i class="bi bi-bell" style={{fontSize: '2em', marginLeft: '3px'}}></i></Link></li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" aria-current="page" role="button" data-bs-toggle="dropdown" area-expanded="false">MarceloCondori <i class="bi bi-person-circle" style={{fontSize: '2em', marginLeft: '3px'}}></i></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item"><i class="bi bi-question-lg"></i>Ayuda</Link></li>
                                        <li><Link className="dropdown-item"><i class="bi bi-tools"></i>Configuracion</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item"><i class="bi bi-box-arrow-left"></i>Cerrar Session</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>

                <Routes>
                    <Route path="/" element={<Bienvenido/>}>
                    </Route>
                    <Route path="//FacturaElectronica"></Route>
                </Routes>

                
            </div> 
        </div>
    );
  }
  
  export default Home;
  