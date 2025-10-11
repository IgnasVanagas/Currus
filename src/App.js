import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "@pages/LandingPage";
import FurnitureManufacturingPage from "@pages/FurnitureManufacturingPage";
import PartsManufacturingPage from "@pages/PartsManufacturingPage";
import ServicesPage from "@pages/ServicesPage";
import OrderGuidelinesPage from "@pages/OrderGuidelinesPage";
import GalleryPage from "@pages/GalleryPage";
import NewsPage from "@pages/NewsPage";
import ContactPage from "@pages/ContactPage";
export default function App() {
    return (_jsxs(_Fragment, { children: [_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "/baldu-gamyba", element: _jsx(FurnitureManufacturingPage, {}) }), _jsx(Route, { path: "/baldu-detaliu-gamyba", element: _jsx(PartsManufacturingPage, {}) }), _jsx(Route, { path: "/paslaugos", element: _jsx(ServicesPage, {}) }), _jsx(Route, { path: "/kaip-pateikti-uzsakyma", element: _jsx(OrderGuidelinesPage, {}) }), _jsx(Route, { path: "/darbu-galerija", element: _jsx(GalleryPage, {}) }), _jsx(Route, { path: "/naujienos", element: _jsx(NewsPage, {}) }), _jsx(Route, { path: "/kontaktai", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }), _jsx(Toaster, { position: "bottom-right", toastOptions: { duration: 4200 } })] }));
}
