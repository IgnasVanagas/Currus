import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "@pages/LandingPage";
import FurnitureManufacturingPage from "@pages/FurnitureManufacturingPage";
import PartsManufacturingPage from "@pages/PartsManufacturingPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/baldu-gamyba" element={<FurnitureManufacturingPage />} />
        <Route path="/baldu-detaliu-gamyba" element={<PartsManufacturingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="bottom-right" toastOptions={{ duration: 4200 }} />
    </>
  );
}
