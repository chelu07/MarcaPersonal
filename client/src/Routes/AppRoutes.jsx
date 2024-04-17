import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/dashboard/errorPage/ErrorPage";
import { Home } from "../pages/dashboard/home/Home";
import NavBarApp from "../components/NavBarApp/NavBarApp";
import { Contacto } from "../pages/dashboard/contacto/Contacto";
import Cv from "../pages/dashboard/cv/Cv";
import Projects from "../pages/dashboard/proyectos/Projects";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
