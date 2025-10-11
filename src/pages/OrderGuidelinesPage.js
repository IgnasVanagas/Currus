import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout } from "@layouts/PageLayout";
import { downloadLink } from "@data/content";
const steps = [
    {
        title: "1. Pasiruoškite specifikaciją",
        details: "Atsisiųskite mūsų Excel šabloną ir užpildykite matmenis, medžiagas bei specialius reikalavimus. Jei reikia, mielai padedame tai padaryti kartu nuotoliniu skambučiu."
    },
    {
        title: "2. Pasidalinkite vizualine medžiaga",
        details: "Pridėkite planus, eskizus ar nuotraukas, kurios padeda suprasti erdvę. Kuo daugiau konteksto turėsime, tuo tikslesnį pasiūlymą parengsime."
    },
    {
        title: "3. Suderinkime terminus ir sąmatas",
        details: "Parengiame preliminarią sąmatą ir gamybos grafiką. Aptariame galimas alternatyvas, optimizacijas bei logistikos sprendimus."
    },
    {
        title: "4. Gamybos startas",
        details: "Patvirtinus sąlygas, pradedame gamybą, reguliariai informuojame apie eigą ir pasirūpiname montavimu bei kokybės patikra."
    }
];
export const OrderGuidelinesPage = () => (_jsxs(PageLayout, { downloadLabel: downloadLink.label, downloadHref: downloadLink.href, children: [_jsx("section", { className: "page-hero", children: _jsxs("div", { className: "container narrow", children: [_jsx("h1", { children: "Kaip pateikti u\u017Esakym\u0105?" }), _jsx("p", { children: "Nesvarbu, ar turite parengt\u0105 projekt\u0105, ar tik id\u0117j\u0105 \u2013 \u017Eingsnis po \u017Eingsnio padedame paruo\u0161ti ai\u0161ki\u0105 specifikacij\u0105 ir suplanuoti gamyb\u0105." })] }) }), _jsx("section", { className: "section-stack", children: _jsxs("div", { className: "container", children: [_jsx("ol", { className: "step-list", children: steps.map((step) => (_jsxs("li", { children: [_jsx("h2", { children: step.title }), _jsx("p", { children: step.details })] }, step.title))) }), _jsxs("div", { className: "callout", children: [_jsx("h3", { children: "Prad\u0117kite nuo \u0161ablono" }), _jsx("p", { children: "M\u016Bs\u0173 specifikacijos \u0161ablonas padeda greitai suvesti b\u016Btin\u0105 informacij\u0105. \u012Ekelkite fail\u0105 ir kolegoms \u2013 taip visi dirbs su tuo pa\u010Diu dokumentu." }), _jsx("a", { className: "button", href: downloadLink.href, download: true, children: "Atsisi\u0173sti Excel \u0161ablon\u0105" })] })] }) })] }));
export default OrderGuidelinesPage;
