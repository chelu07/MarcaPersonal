import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Cv.scss";

export const Cv = () => {
  return (
    <>
      <Row
        id="experiencia"
        className="d-flex justify-content-center align-items-center text-center "
      >
        <Col className="experienciaTitulo col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p>Experiencia profesional</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="d-flex flex-row justify-content-end col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="circuloTiempo"></div>
          <div className="circuloTiempo2"></div>
          <div className="lineaTiempo"></div>
        </Col>
        <Col className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="cardExperiencia d-flex justify-content-center flex-column">
            <h3 className="h3Experiencia">FULL STACK WEB DEVELOPER</h3>
            <p className="pExperiencia2">2023-2024 (5 meses)</p>
            <p className="pExperiencia">
              Desarrollo de MVP para la aplicación web KanKoo:
            </p>
            <p className="pExperiencia2">Creación de base de datos.</p>
            <p className="pExperiencia2">
              Diseño de la experiencia de usuario.
            </p>
            <p className="pExperiencia2">
              Diseño de la interfaz de usuario para el consumo de la app en
              todos los tamaños de dispositivos, siguiendo el enfoque “mobile
              first”
            </p>
            <p className="pExperiencia2">
              Creación tanto del back-end como del front-end para implementar
              todas las funcionalidades requeridas.
            </p>
          </div>
          <div className="cardExperiencia2 d-flex justify-content-center flex-column">
            <h3 className="h3Experiencia">
              RESPONSABLE DE MARKETING Y COMUNICACIÓN
            </h3>
            <p className="pExperiencia2">2016-2023</p>
            <p className="pExperiencia">Ayuntamiento de Casares, Málaga</p>
            <p className="pExperiencia2">
              En el área que lideré, pude coordinar equipos de trabajo de más de
              20 perso- nas, tarea que me permitiódesarrollar una gran capacidad
              de trabajar en equipo y ser proactivo ante la resolución de
              conflictos.
            </p>
            <p className="pExperiencia2">
              Además, pude diseñar y supervisar la estrategia de comunicación
              global, y participar activamente en el diseño de piezas gráficas,
              redes sociales, eventos y actos corporativos, y relación con
              medios de comunicación.
            </p>
          </div>
        </Col>
      </Row>

      {/* FORMACIÓN ------------> */}
      <Row
        id="formacion"
        className="d-flex justify-content-center align-items-center text-center "
      >
        <Col className="experienciaTitulo col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p>Formación</p>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col
          lg={3}
          md={12}
          sm={12}
          xs={12}
          className="fotosFormacion d-flex justify-content-around align-items-center"
        >
          <div className="cardFormacion d-flex text-center justify-content-center align-items-center flex-column">
            <img
              className=""
              src="./assets/SOCRATECHH.png"
              alt="logo socratech"
            />

            <h3 className="h3Formacion">FULL STACK WEB DEVELOPER</h3>
            <p className="pFormacion1">Sept 2023 - feb 2024</p>
            <p className="pFormacion2">Modalidad online</p>
            <Button
              className="botonContacto"
              onClick={() => window.open("https://socratech.es/bootcamp/")}
            >
              GO
            </Button>
            <p className="detalle">__</p>
          </div>
        </Col>
        <Col
          lg={3}
          md={12}
          sm={12}
          xs={12}
          className="fotosFormacion d-flex justify-content-around align-items-center"
        >
          <div className="cardFormacion d-flex text-center justify-content-center align-items-center flex-column">
            <img
              className=""
              src="./assets/CREACTIVA.png"
              alt="logo AULACREACTIVA"
            />

            <h3 className="h3Formacion">MÁSTER MARKETING DIGITAL</h3>
            <p className="pFormacion1">2020 - 2021</p>
            <p className="pFormacion2"> Madrid</p>
            <Button
              className="botonContacto"
              onClick={() =>
                window.open(
                  "https://www.aulacreactiva.com/master/marketing-digital-redes-sociales-madrid/"
                )
              }
            >
              GO
            </Button>
            <p className="detalle">__</p>
          </div>
        </Col>
        <Col
          lg={3}
          md={12}
          sm={12}
          xs={12}
          className="fotosFormacion d-flex justify-content-around align-items-center"
        >
          <div className="cardFormacion d-flex text-center justify-content-center align-items-center flex-column">
            <img className="" src="./assets/AUTONOMA.png" alt="logo UAA" />

            <h3 className="h3Formacion">COMUNICACIÓN CORPORATIVA</h3>
            <p className="pFormacion1">2011 (Beca: 6 meses)</p>
            <p className="pFormacion2"> Aguascalientes, México</p>
            <Button
              className="botonContacto"
              onClick={() =>
                window.open(
                  "https://www.uaa.mx/descubretucarrera/ccsh/lic-en-comunicacion-corporativa-estrategica/plan.pdf"
                )
              }
            >
              GO
            </Button>
            <p className="detalle">__</p>
          </div>
        </Col>
        <Col
          lg={3}
          md={12}
          sm={12}
          xs={12}
          className="fotosFormacion d-flex justify-content-around align-items-center"
        >
          <div className="cardFormacion d-flex text-center justify-content-center align-items-center flex-column">
            <img className="" src="./assets/UMA.png" alt="Fondo de pantalla" />

            <h3 className="h3Formacion"> PUBLICIDAD Y RRPP</h3>
            <p className="pFormacion1">2008 - 2013 </p>
            <p className="pFormacion2">Málaga</p>
            <Button
              className="botonContacto"
              onClick={() =>
                window.open(
                  "https://www.uma.es/facultad-de-ciencias-de-la-comunicacion/"
                )
              }
            >
              GO
            </Button>
            <p className="detalle">__</p>
          </div>
        </Col>
      </Row>

      {/* Skills ---------------> */}
      <Row className="d-flex justify-content-center align-items-center text-center ">
        <Col className="experienciaTitulo col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p>Tecnologías/Skills</p>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/html.png"
                alt="logo HTML5"
              />
            </div>
            <h3 className="h3TEC">HTML5</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/css-3.png"
                alt="logo CSS3"
              />
            </div>
            <h3 className="h3TEC">CSS3</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/archivo-js.png"
                alt="logo JavaScript"
              />
            </div>
            <h3 className="h3TEC">JavaScript</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/biblioteca.png"
                alt="logo HTML5"
              />
            </div>
            <h3 className="h3TEC">React</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/bootstrap.png"
                alt="logo HTML5"
              />
            </div>
            <h3 className="h3TEC">Bootstrap</h3>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/node.png"
                alt="logo node.js"
              />
            </div>
            <h3 className="h3TEC">Node.js</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/database.png"
                alt="logo DATABASE"
              />
            </div>
            <h3 className="h3TEC">MySQL</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/sass.png"
                alt="logo sass"
              />
            </div>
            <h3 className="h3TEC">SASS</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/github.png"
                alt="logo github"
              />
            </div>
            <h3 className="h3TEC">GitHub</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/scrum.png"
                alt="logo scrum"
              />
            </div>
            <h3 className="h3TEC">Agile Scrum</h3>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/wordpress.png"
                alt="logo Wordpress"
              />
            </div>
            <h3 className="h3TEC">Wordpress</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/adobe-illustrator.png"
                alt="logo Illustrator"
              />
            </div>
            <h3 className="h3TEC">Illustrator</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/adobe-photoshop.png"
                alt="logo Photoshop"
              />
            </div>
            <h3 className="h3TEC">Photoshop</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/figma.png"
                alt="logo Figma"
              />
            </div>
            <h3 className="h3TEC">Figma</h3>
          </div>
        </Col>
        <Col lg={2} md={6} sm={6} xs={12} className="fotosChelu">
          <div className="cardTEC d-flex flex-column align-items-center">
            <div className="fondoIconosTEC">
              <img
                className="iconosTEC"
                src="./assets/trello.png"
                alt="logo trello"
              />
            </div>
            <h3 className="h3TEC">Trello</h3>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cv;
