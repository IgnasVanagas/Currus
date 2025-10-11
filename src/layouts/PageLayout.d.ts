import { ReactNode } from "react";
interface PageLayoutProps {
    downloadLabel?: string;
    downloadHref?: string;
    hideFooter?: boolean;
    mainClassName?: string;
    children: ReactNode;
}
export declare const PageLayout: ({ downloadLabel, downloadHref, hideFooter, mainClassName, children }: PageLayoutProps) => import("react/jsx-runtime").JSX.Element;
export {};
