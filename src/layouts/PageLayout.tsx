import { ReactNode } from "react";
import { Navigation } from "@components/Navigation";
import { ScrollProgress } from "@components/ScrollProgress";
import { Footer } from "@components/Footer";
import { useScrollToHash } from "@hooks/useScrollToHash";

interface PageLayoutProps {
  downloadLabel?: string;
  downloadHref?: string;
  hideFooter?: boolean;
  mainClassName?: string;
  children: ReactNode;
}

export const PageLayout = ({ downloadLabel, downloadHref, hideFooter, mainClassName, children }: PageLayoutProps) => {
  useScrollToHash();

  return (
    <div className="page-shell">
      <ScrollProgress />
      <Navigation downloadLabel={downloadLabel} downloadHref={downloadHref} />
      <main className={mainClassName}>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};
