import { ReactNode } from "react";
interface PageLayoutProps {
    downloadLabel?: string;
    downloadHref?: string;
    children: ReactNode;
}
export declare const PageLayout: ({ downloadLabel, downloadHref, children }: PageLayoutProps) => import("react/jsx-runtime").JSX.Element;
export {};
