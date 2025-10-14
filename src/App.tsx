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
import FundingPage from "@pages/FundingPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/baldu-gamyba" element={<FurnitureManufacturingPage />} />
        <Route path="/baldu-detaliu-gamyba" element={<PartsManufacturingPage />} />
        <Route path="/paslaugos" element={<ServicesPage />} />
        <Route path="/kaip-pateikti-uzsakyma" element={<OrderGuidelinesPage />} />
        <Route path="/darbu-galerija" element={<GalleryPage />} />
        <Route path="/naujienos" element={<NewsPage />} />
        <Route path="/kontaktai" element={<ContactPage />} />
        <Route path="/darbuotoju-igudziu-ugdymas" element={<FundingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="bottom-right" toastOptions={{ duration: 4200 }} />
    </>
  );
}
