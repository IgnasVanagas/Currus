import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout } from "@layouts/PageLayout";
const galleryItems = [
    {
        title: "Biuro erdvės",
        description: "Moduliniai darbo stalai ir susitikimų zonos, pritaikytos hibridiniam darbui.",
        image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80"
    },
    {
        title: "HoReCa interjeras",
        description: "Restoranų baldai su specialiomis apdailomis drėgnoms aplinkoms.",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80"
    },
    {
        title: "Mažmeninės prekybos sprendimai",
        description: "Prekybos salių stendai ir kassų zonos su integruotomis technologijomis.",
        image: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1600&q=80"
    }
];
export const GalleryPage = () => (_jsxs(PageLayout, { children: [_jsx("section", { className: "page-hero", children: _jsxs("div", { className: "container narrow", children: [_jsx("h1", { children: "Darb\u0173 galerija" }), _jsx("p", { children: "Keli projektai, kuriais did\u017Eiuojam\u0117s. Esame pasiruo\u0161\u0119 pritaikyti patirt\u012F \u012Fvairiems sektoriams \u2013 nuo biur\u0173 iki vie\u0161bu\u010Di\u0173 ar ma\u017Emenos." })] }) }), _jsx("section", { className: "section-stack", children: _jsx("div", { className: "container gallery-grid", children: galleryItems.map((item) => (_jsxs("figure", { children: [_jsx("div", { className: "gallery-image", style: { backgroundImage: `url(${item.image})` } }), _jsxs("figcaption", { children: [_jsx("h2", { children: item.title }), _jsx("p", { children: item.description })] })] }, item.title))) }) })] }));
export default GalleryPage;
