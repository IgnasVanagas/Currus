import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout } from "@layouts/PageLayout";
import { downloadLink } from "@data/content";
const serviceSections = [
    {
        id: "baldu-dizainas",
        title: "Baldų dizainas ir projektavimas",
        summary: "Kuriame individualius baldų sprendimus nuo eskizo iki gamybos brėžinių, padedančius užtikrinti ergonomiką ir estetiką.",
        bullets: [
            "Erdvės analizė ir koncepcijų dirbtuvės",
            "3D vizualizacijos kartu su medžiagų parinkimu",
            "Gamybos dokumentacijos paruošimas"
        ]
    },
    {
        id: "interjero-dizainas",
        title: "Interjero dizainas",
        summary: "Padedame verslui kurti funkcionalesnes darbo ir klientų aptarnavimo erdves, pritaikytas konkretiems scenarijams.",
        bullets: [
            "Verslo tikslų ir lankytojų srautų išgryninimas",
            "Medžiagų, spalvų ir apšvietimo deriniai",
            "Techninių planų ir montavimo priežiūra"
        ]
    },
    {
        id: "laminuotos-plokstes",
        title: "Laminuotos plokštės pjovimas ir kantavimas",
        summary: "Moderni įranga leidžia tiksliai ir greitai apdirbti plokštes, užtikrinant nepriekaištingą paviršių kokybę.",
        bullets: [
            "Nestandartinių formų ir serijinių užsakymų gamyba",
            "0,3 mm tikslumo frezavimas ir gręžimas",
            "ABS, PVC ir faneruotų kraštų klijavimas"
        ]
    }
];
export const ServicesPage = () => (_jsxs(PageLayout, { downloadLabel: downloadLink.label, downloadHref: downloadLink.href, children: [_jsx("section", { className: "page-hero", children: _jsxs("div", { className: "container narrow", children: [_jsx("h1", { children: "Paslaugos" }), _jsx("p", { children: "Esame pasiruo\u0161\u0119 prisid\u0117ti tiek prie viso bald\u0173 projekto, tiek prie konkretaus gamybos etapo. Toliau rasite svarbiausias kompetencijas ir tai, kaip galime pad\u0117ti j\u016Bs\u0173 komandai." })] }) }), _jsx("section", { className: "section-stack", children: _jsx("div", { className: "container", children: serviceSections.map((section) => (_jsxs("article", { id: section.id, className: "feature-block", children: [_jsxs("header", { children: [_jsx("h2", { children: section.title }), _jsx("p", { children: section.summary })] }), _jsx("ul", { children: section.bullets.map((bullet) => (_jsx("li", { children: bullet }, bullet))) })] }, section.id))) }) })] }));
export default ServicesPage;
