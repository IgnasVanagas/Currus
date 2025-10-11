import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigation } from "@components/Navigation";
import { ScrollProgress } from "@components/ScrollProgress";
import { Footer } from "@components/Footer";
import { useScrollToHash } from "@hooks/useScrollToHash";
export const PageLayout = ({ downloadLabel, downloadHref, hideFooter, mainClassName, children }) => {
    useScrollToHash();
    return (_jsxs("div", { className: "page-shell", children: [_jsx(ScrollProgress, {}), _jsx(Navigation, { downloadLabel: downloadLabel, downloadHref: downloadHref }), _jsx("main", { className: mainClassName, children: children }), !hideFooter && _jsx(Footer, {})] }));
};
