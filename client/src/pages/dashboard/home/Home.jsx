import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Home.scss";
import Contacto from "../contacto/Contacto";
import Cv from "../cv/Cv";
import Projects from "../proyectos/Projects";

export const Home = () => {
  return (
    <Container fluid className="containerHome">
      <Row id="inicio">
        <Col className="presentacion col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h2 className="h2Home">¡Hola! Soy</h2>
          <img
            className="letraslogo"
            src="./assets/letraslogo-pdf.jpg"
            alt="Fondo de pantalla"
          />
          <p className="pHome">FULL STACK WEB DEVELOPER</p>
        </Col>
      </Row>
      <Row className="logoCompleto justify-content-center">
        <Col className="d-flex justify-content-center">
          <img
            className="logoBarba"
            src="./assets/logoCara1.png"
            alt="Fondo de pantalla"
          />
        </Col>
      </Row>
      <Row>
        <Col className="presentacion col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="linea">
            <p className="pPresentacion">
              Aquí un trotamundos apasionado de la tecnología y de la riqueza
              cultural que me proporciona viajar.
            </p>
            <p className="pPresentacion">
              Mi experiencia como{" "}
              <span className="textoAmarillo">
                Junior Full Stack Web Developer
              </span>{" "}
              en KanKoo me ha permitido crear desde cero un MVP en el que he
              desarrollado tanto el Frontend como el Backend, y diseñado la
              experiencia de usuario y la Base de Datos. Además de adaptar la
              app a todos los dispositivos.
            </p>
            <p className="pPresentacion">
              Con un gran compromiso en lo que hago, y con capacidad para
              adaptarme fácilmente a los grupos de trabajo, he podido coordinar
              equipos de más de 20 personas en mi anterior puesto:{" "}
              <span className="textoAmarillo">
                responsable de marketing y comunicación
              </span>{" "}
              en el Ayuntamiento de Casares.
            </p>
            <p className="pPresentacion">
              ¡Así, sin más, estoy listo para asumir nuevos desafíos y seguir
              aprendiendo!
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="unPocoMas col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <p className="pWho">UN POCO MÁS SOBRE MI...</p>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="fotosChelu d-flex justify-content-around align-items-center"
        >
          <div className="cardHome d-flex text-center justify-content-center align-items-center flex-column">
            <img
              className=""
              src="./assets/formal1.jpeg"
              alt="Fondo de pantalla"
            />
            <div className="fondoLogo">
              <img
                className="logoFotos"
                src="./assets/hombre.png"
                alt="hombre gorra"
              />
            </div>
            <p className="pFotos">
              Este soy yo con camisa. Me pongo formal de vez en cuando
            </p>
          </div>
        </Col>
        <Col
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="fotosChelu d-flex justify-content-around align-items-center"
        >
          <div className="cardHome d-flex text-center justify-content-center align-items-center flex-column">
            <img
              className=""
              src="./assets/gorra1.jpeg"
              alt="Fondo de pantalla"
            />
            <div className="fondoLogo d-flex justify-content-center">
              <img
                className="logoFotos"
                src="./assets/gorra.png"
                alt="hombre gorra"
              />
            </div>
            <p className="pFotos">
              Este también soy yo, creyéndome hispter y moderno
            </p>
          </div>
        </Col>
        <Col
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="fotosChelu d-flex justify-content-around align-items-center"
        >
          <div className="cardHome d-flex text-center justify-content-center align-items-center flex-column">
            <img
              className=""
              src="./assets/marley1.jpeg"
              alt="Fondo de pantalla"
            />
            <div className="fondoLogo">
              <img
                className="logoFotos"
                src="./assets/bulldog-frances.png"
                alt="perro"
              />
            </div>
            <p className="pFotos">
              Y él es Marley, mi bebé y ayudante (¡Ojo! codea mejor que yo jjj)
            </p>
          </div>
        </Col>
      </Row>
      <Row className="ilustracion2 justify-content-center">
        <Col className="d-flex justify-content-center text-center align-items-center flex-column">
          <p className="textoIntereses">EN MIS RATOS LIBRES...</p>
          <img
            src="./assets/ILUSTRACION2.png"
            alt="ilustracion mesa trabajo developer"
          />
        </Col>
      </Row>
      <Row className="justify-content-center text-center pb-5">
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-around align-items-center"
        >
          <p className="pCualidades1">HABILIDAD TÉCNICA</p>
          <p className="pCualidades1">ADAPTABILIDAD</p>
          <p className="pCualidades1">ORGANIZACIÓN</p>
          <p className="pCualidades1">EXPERIENCIA</p>
          <p className="pCualidades1">CREATIVIDAD</p>
          <p className="pCualidades1">CONSTANCIA</p>
          <p className="pCualidades1">DISCIPLINA</p>
          <img
            className="flechaAbajo"
            src="./assets/flecha-hacia-abajo.png"
            alt="perro"
          />
          <h2 className="pCualidades2">
            «Estas son algunas de las cualidades que debe tener un buen
            developer. Pero de todas ellas, ¿cuál tengo yo?»
          </h2>
          <h2 className="pCualidades3">
            «Podría responderte aquí mismo, pero, ¿no crees que es mejor que nos
            conozcamos en una llamada/videollamda y pueda contarte más sobre
            mí?»
          </h2>
          <h2 className="pCualidades2">
            De momento, puedo adelantarte que me apasiona trabajar en equipo y
            que cuando pienso en cómo sería mi trabajo ideal, me imagino sacando
            el trabajo adelante de muy buen rollo con mis compis mientras
            aprendemos los unos de los otros.
          </h2>
        </Col>
      </Row>
      <Contacto />
      <Cv />
      <Projects />
    </Container>
  );
};
