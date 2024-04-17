import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./Projects.scss";

export const Projects = () => {
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center text-center ">
        <Col
          id="proyectos"
          className="proyectosTitulo col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <p>PROYECTOS</p>
        </Col>
      </Row>

      {/* BOCADO --------------------------> */}
      <Row>
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="divBocadoTitulo">
            <h2 className="tituloBocado">1.App Bocado</h2>
          </div>
          <img
            className="imgBocado"
            src="./assets/bocado1.png"
            alt="imagen web bocado"
          />
          <div className="divBocadoParrafo">
            <p className="pBocado">
              Esta app web (mobile first) la desarrollé junto a un equipo de
              juniors para la empresa KanKoo.
            </p>
            <p className="pBocado">
              En KanKoo puedes descubrir las audio-guías y video-guías que otr@s
              usuari@s han creado para tener información de tu destino
              vacacional. Y también puedes subir tus propias guías para que
              otras personas las disfruten y así contribuir a la comunidad de
              usuari@s.
            </p>
          </div>

          <Row className="divBotonesProjects d-flex justify-content-center">
            <h4 className="h4Botones d-flex justify-content-center text-center">
              Échale un vistazo al proyecto en:
            </h4>
            <Col className="d-flex flex-column align-items-center">
              <img
                className="iconoYoutube"
                src="./assets/github.png"
                alt="logo github"
              />
              <Button
                className="botonYoutube"
                onClick={() =>
                  window.open("https://github.com/chelu07/guiaRestaurantes")
                }
              >
                Go
              </Button>
              <p>--</p>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <img
                className="iconoYoutube"
                src="./assets/video.png"
                alt="logo Youtube"
              />
              <Button
                className="botonYoutube"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=xvC74bUOMa4&ab_channel=Jos%C3%A9LuisHerreraGil"
                  )
                }
              >
                Go
              </Button>
              <p>--</p>
            </Col>
          </Row>
          <Row className="d-flex flex-row  divTecnologiasBocado">
            <h4 className="d-flex justify-content-center align-items-center text-center">
              Tecnologías usadas
            </h4>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/html.png"
                  alt="logo HTML5"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                HTML5
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/css-3.png"
                  alt="logo CSS3"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                CSS3
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/archivo-js.png"
                  alt="logo JS"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                JavaScript
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/bootstrap.png"
                  alt="logo bootstrap"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                Bootstrap
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/node.png"
                  alt="logo node"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                Node.js
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/database.png"
                  alt="logo MySQL"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                MySQL
              </h3>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* KANKOO --------------------------> */}
      <Row>
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="divBocadoTitulo">
            <h2 className="tituloBocado">2.App Kankoo</h2>
          </div>
          <img
            className="imgBocado"
            src="./assets/kankoo1.png"
            alt="imagen web kankoo"
          />
          <div className="divBocadoParrafo">
            <p className="pBocado">
              Este proyecto lo desarrollé sin experiencia previa, después de
              estudiar las primeras 8 semanas de mi Bootcamp Full-Stack Web
              Developer (y aún quedaban 8 semanas más).
            </p>
            <p className="pBocado">
              Se trata de una app web en la que puedes registrar tu restaurante,
              filtrado por el tipo de comida que ofreces en él. Y, además,
              añadir, editar y elimnar los platos más destacados de tu menú.
            </p>
          </div>

          <Row className="divBotonesProjects d-flex justify-content-center">
            <h4 className="h4Botones d-flex justify-content-center text-center">
              Échale un vistazo al proyecto en:
            </h4>
            <Col className="d-flex flex-column align-items-center">
              <img
                className="iconoYoutube"
                src="./assets/github.png"
                alt="logo github"
              />
              <Button
                className="botonYoutube"
                onClick={() =>
                  window.open("https://github.com/chelu07/KankooApp")
                }
              >
                Go
              </Button>
              <p>--</p>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <img
                className="iconoYoutube"
                src="./assets/video.png"
                alt="logo Youtube"
              />
              <Button
                className="botonYoutube"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=RT6CjkMvZTk&t=429s&ab_channel=Socratech"
                  )
                }
              >
                Go
              </Button>
              <p>--</p>
            </Col>
          </Row>
          <Row className="d-flex flex-row  divTecnologiasBocado">
            <h4 className="d-flex justify-content-center align-items-center text-center">
              Tecnologías usadas
            </h4>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/html.png"
                  alt="logo HTML5"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                HTML5
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/css-3.png"
                  alt="logo CSS3"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                CSS3
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/archivo-js.png"
                  alt="logo JS"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                JavaScript
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/bootstrap.png"
                  alt="logo bootstrap"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                Bootstrap
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/node.png"
                  alt="logo node"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                Node.js
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/database.png"
                  alt="logo MySQL"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                MySQL
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/biblioteca.png"
                  alt="logo React"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                React
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/github.png"
                  alt="logo GitHub"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                GitHub
              </h3>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="cardTECbocado d-flex flex-column align-items-center"
            >
              <div className="fondoIconosBocado">
                <img
                  className="iconosTECbocado"
                  src="./assets/figma.png"
                  alt="logo Figma"
                />
              </div>
              <h3 className="h3TECbocado d-flex  justify-content-center">
                Figma
              </h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
