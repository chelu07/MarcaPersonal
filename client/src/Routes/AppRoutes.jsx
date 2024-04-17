import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/dashboard/errorPage/ErrorPage";
import { Home } from "../pages/dashboard/home/Home";
import NavBarApp from "../components/NavBarApp/NavBarApp";
import { Contacto } from "../pages/dashboard/contacto/Contacto";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
};
