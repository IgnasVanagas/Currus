import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { brand } from "@data/content";

export const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isLanding = location.pathname === "/";

  return (
    <footer className="footer">
      <div className="container footer-content">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="brand-mark">Currus</span>
          <span className="brand-sub">Baldai</span>
          <p>{brand.tagline}</p>
        </motion.div>
        <div className="footer-links">
          {!isLanding && (
            <button type="button" onClick={scrollToTop}>
              Į viršų
            </button>
          )}
          <Link to="/baldu-gamyba">Baldų gamyba</Link>
          <Link to="/baldu-detaliu-gamyba">Baldų detalių gamyba</Link>
        </div>
        <div className="footer-meta">
          <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
          <a href={`tel:${brand.contact.phone}`}>{brand.contact.phone}</a>
          <span>{brand.contact.address}</span>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Currus Baldai. Visos teisės saugomos.
      </div>
    </footer>
  );
};
