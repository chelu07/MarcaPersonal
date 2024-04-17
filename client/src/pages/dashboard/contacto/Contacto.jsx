import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Contacto.scss";

export const Contacto = () => {
  const [textoBoton, setTextoBoton] = useState("Go");

  const handleClick = () => {
    setTextoBoton("Marcar en tu móvil");
  };

  return (
    <>
      <Row>
        <Col className="unPocoMas col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <p id="contacto" className="contactoTitulo">
            CONTACTO
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className="d-flex justify-content-around align-items-center"
        >
          <div className="cardContacto d-flex text-center justify-content-center align-items-center flex-column">
            <div className="fondoIconosContacto">
              <img
                className="iconosContacto1"
                src="./assets/linkedin.png"
                alt="logo linkedin"
              />
            </div>
            <h3 className="h3Contacto">¿Un vistazo a mi LinkeIn?</h3>
            <p className="pContacto">linkedin.com/in/chelu-herrera/</p>
            <Button
              className="botonContacto"
              onClick={() =>
                window.open("https://www.linkedin.com/in/chelu-herrera/")
              }
            >
              Go
            </Button>
            <p className="detalle">__</p>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className="fotosChelu d-flex justify-content-around align-items-center"
        >
          <div className="cardContacto d-flex text-center justify-content-center align-items-center flex-column">
            <div className="fondoIconosContacto">
              <img
                className="iconosContacto"
                src="./assets/github.png"
                alt="logo github"
              />
            </div>
            <h3 className="h3Contacto">¿Una ojeadilla a mi GitHub?</h3>
            <p className="pContacto">github.com/chelu07</p>
            <Button
              className="botonContacto"
              onClick={() => window.open("https://github.com/chelu07")}
            >
              Go
            </Button>
            <p className="detalle">__</p>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className="fotosChelu d-flex justify-content-around align-items-center"
        >
          <div className="cardContacto d-flex text-center justify-content-center align-items-center flex-column">
            <div className="fondoIconosContacto">
              <img
                className="iconosContacto"
                src="./assets/email.png"
                alt="logo email"
              />
            </div>
            <h3 className="h3Contacto">¿Un mail?</h3>
            <p className="pContacto">chelucontacto@gmail.com</p>
            <Button
              className="botonContacto"
              onClick={() => window.open("mailto:chelucontacto@gmail.com")}
            >
              Go
            </Button>
            <p className="detalle">__</p>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className="fotosChelu d-flex justify-content-around align-items-center"
        >
          <div className="cardContacto d-flex text-center justify-content-center align-items-center flex-column">
            <div className="fondoIconosContacto">
              <img
                className="iconosContacto"
                src="./assets/telefono.png"
                alt="logo telefono"
              />
            </div>
            <div>
              <h3 className="h3Contacto">¿Una llamada?</h3>
              <p className="pContacto">(+34)666801564</p>
              <Button className="botonContacto" onClick={handleClick}>
                {textoBoton}
              </Button>
              <p className="detalle">__</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="d-flex ilustracion1 justify-content-center align-items-center">
        <Col className="justify-content-center text-center align-items-center">
          <img
            className="imgIlustracion1"
            src="./assets/ILUSTRACION1.png"
            alt="ilustracion mesa trabajo developer"
          />
        </Col>
      </Row>
    </>
  );
};

export default Contacto;
