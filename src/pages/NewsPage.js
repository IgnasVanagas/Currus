import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout } from "@layouts/PageLayout";
const newsItems = [
    {
        title: "Naujas CNC centras Kauno gamykloje",
        date: "2025-06-14",
        summary: "Investavome į naują penkių ašių CNC centrą, kuris leidžia greičiau atlikti nestandartinius užsakymus ir mažinti broko procentą."
    },
    {
        title: "Bendradarbiavimas su interjero studijomis",
        date: "2025-04-02",
        summary: "Pradėjome partnerystę su trimis interjero studijomis, kad klientai gautų vientisą dizaino ir gamybos paslaugą."
    },
    {
        title: "Dalijamės tvarumo ataskaita",
        date: "2025-02-18",
        summary: "Viešiname metinius CO₂ pėdsako rodiklius ir pristatome medžiagų perdirbimo iniciatyvas, kurios leidžia sumažinti atliekų kiekį 17%."
    }
];
const formatDate = (value) => new Date(value + "T00:00:00Z").toLocaleDateString("lt-LT", { year: "numeric", month: "long", day: "numeric" });
export const NewsPage = () => (_jsxs(PageLayout, { children: [_jsx("section", { className: "page-hero", children: _jsxs("div", { className: "container narrow", children: [_jsx("h1", { children: "Naujienos" }), _jsx("p", { children: "Dalinam\u0117s svarbiausiais \u012Fmon\u0117s poky\u010Diais, investicijomis ir renginiais. Prenumeruokite naujienlai\u0161k\u012F, kad visada b\u016Btum\u0117te pirmieji." })] }) }), _jsx("section", { className: "section-stack", children: _jsx("div", { className: "container news-list", children: newsItems.map((item) => (_jsxs("article", { children: [_jsx("time", { dateTime: item.date, children: formatDate(item.date) }), _jsx("h2", { children: item.title }), _jsx("p", { children: item.summary }), _jsx("a", { className: "text-link", href: "#", children: "Skaityti daugiau \u2192" })] }, item.title))) }) })] }));
export default NewsPage;
