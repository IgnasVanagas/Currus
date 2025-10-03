import { ReactNode } from "react";
import { Navigation } from "@components/Navigation";
import { ScrollProgress } from "@components/ScrollProgress";
import { Footer } from "@components/Footer";
import { useScrollToHash } from "@hooks/useScrollToHash";

interface PageLayoutProps {
  downloadLabel?: string;
  downloadHref?: string;
  children: ReactNode;
}

export const PageLayout = ({ downloadLabel, downloadHref, children }: PageLayoutProps) => {
  useScrollToHash();

  return (
    <div className="page-shell">
      <ScrollProgress />
      <Navigation downloadLabel={downloadLabel} downloadHref={downloadHref} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
