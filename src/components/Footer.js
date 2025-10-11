import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { brand } from "@data/content";
const sanitizePhone = (phone) => phone.replace(/[^+\d]/g, "");
export const Footer = () => {
    const location = useLocation();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const isLanding = location.pathname === "/";
    return (_jsxs("footer", { className: "footer", children: [_jsxs("div", { className: "container footer-content", children: [_jsxs(motion.div, { className: "footer-brand", initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx("span", { className: "brand-mark", children: "Currus" }), _jsx("span", { className: "brand-sub", children: "Baldai" }), _jsx("p", { children: brand.tagline })] }), _jsxs("div", { className: "footer-links", children: [!isLanding && (_jsx("button", { type: "button", onClick: scrollToTop, children: "\u012E vir\u0161\u0173" })), _jsx(Link, { to: "/baldu-gamyba", children: "Bald\u0173 gamyba" }), _jsx(Link, { to: "/baldu-detaliu-gamyba", children: "Bald\u0173 detali\u0173 gamyba" })] }), _jsxs("div", { className: "footer-meta", children: [_jsx("a", { href: `mailto:${brand.contact.email}`, children: brand.contact.email }), _jsxs("div", { children: ["Bald\u0173 gamyba: ", " ", _jsx("a", { href: `tel:${sanitizePhone(brand.contact.productionPhone)}`, children: brand.contact.productionPhone })] }), _jsxs("div", { children: ["Paslaug\u0173 u\u017Esakymai: ", " ", _jsx("a", { href: `tel:${sanitizePhone(brand.contact.servicesPhone)}`, children: brand.contact.servicesPhone })] }), _jsxs("div", { children: ["Faksas: ", brand.contact.fax] }), _jsx("span", { children: brand.contact.address })] })] }), _jsxs("div", { className: "footer-bottom", children: ["\u00A9 ", new Date().getFullYear(), " Currus Baldai. Visos teis\u0117s saugomos."] })] }));
};
