import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";
import { downloadLink, furnitureContent, landingContent, partsContent } from "../data/content";
const navGroups = [
    { label: landingContent.title, path: "/" },
    { label: "Baldų gamyba", path: "/baldu-gamyba", sections: furnitureContent.navItems },
    {
        label: "Baldų detalių gamyba",
        path: "/baldu-detaliu-gamyba",
        sections: partsContent.navItems
    }
];
export const Navigation = ({ downloadHref, downloadLabel }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const effectiveDownloadHref = downloadHref ?? downloadLink.href;
    const effectiveDownloadLabel = downloadLabel ?? downloadLink.label;
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 40);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        if (!isMenuOpen) {
            return;
        }
        const close = () => setIsMenuOpen(false);
        window.addEventListener("resize", close);
        return () => window.removeEventListener("resize", close);
    }, [isMenuOpen]);
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const handleNavigate = () => setIsMenuOpen(false);
    const downloadButton = effectiveDownloadHref && effectiveDownloadLabel && (_jsx("a", { className: "nav-download", href: effectiveDownloadHref, download: true, children: effectiveDownloadLabel }));
    return (_jsx(motion.header, { className: clsx("nav-shell", { scrolled: hasScrolled }), initial: { y: -80, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6, ease: "easeOut" }, children: _jsxs("div", { className: "nav-container", children: [_jsxs(NavLink, { className: "brand", to: "/", children: [_jsx("span", { className: "brand-mark", children: "Currus" }), _jsx("span", { className: "brand-sub", children: "Baldai" })] }), _jsxs("nav", { className: clsx("nav-links", { open: isMenuOpen }), children: [_jsx("div", { className: "nav-primary", children: navGroups.map((group) => (_jsxs("div", { className: "nav-group", children: [_jsx(NavLink, { to: group.path, className: ({ isActive }) => clsx("nav-link", { active: isActive }), onClick: handleNavigate, children: group.label }), group.sections && (_jsx("div", { className: "nav-dropdown", children: group.sections.map((section) => (_jsx(NavLink, { to: `${group.path}#${section.id}`, className: ({ isActive }) => clsx("nav-dropdown-link", { active: isActive }), onClick: handleNavigate, children: section.label }, section.id))) }))] }, group.path))) }), downloadButton] }), _jsx("button", { className: "nav-toggle", "aria-label": "Perjungti navigacij\u0105", onClick: toggleMenu, children: isMenuOpen ? _jsx(FiX, { size: 24 }) : _jsx(FiMenu, { size: 24 }) })] }) }));
};
