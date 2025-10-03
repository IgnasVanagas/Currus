import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "@pages/LandingPage";
import FurnitureManufacturingPage from "@pages/FurnitureManufacturingPage";
import PartsManufacturingPage from "@pages/PartsManufacturingPage";
export default function App() {
    return (_jsxs(_Fragment, { children: [_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "/baldu-gamyba", element: _jsx(FurnitureManufacturingPage, {}) }), _jsx(Route, { path: "/baldu-detaliu-gamyba", element: _jsx(PartsManufacturingPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }), _jsx(Toaster, { position: "bottom-right", toastOptions: { duration: 4200 } })] }));
}
