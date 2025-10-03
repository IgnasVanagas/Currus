import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  downloadLink,
  furnitureContent,
  landingContent,
  partsContent,
  type NavigationItem
} from "../data/content";

type NavGroup = {
  label: string;
  path: string;
  sections?: NavigationItem[];
};

type NavigationProps = {
  downloadLabel?: string;
  downloadHref?: string;
};

const navGroups: NavGroup[] = [
  { label: landingContent.title, path: "/" },
  { label: "Baldų gamyba", path: "/baldu-gamyba", sections: furnitureContent.navItems },
  {
    label: "Baldų detalių gamyba",
    path: "/baldu-detaliu-gamyba",
    sections: partsContent.navItems
  }
];

export const Navigation = ({ downloadHref, downloadLabel }: NavigationProps) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const effectiveDownloadHref = downloadHref ?? downloadLink.href;
  const effectiveDownloadLabel = downloadLabel ?? downloadLink.label;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const close = () => setIsMenuOpen(false);
    window.addEventListener("resize", close);

    return () => window.removeEventListener("resize", close);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleNavigate = () => setIsMenuOpen(false);

  const downloadButton = effectiveDownloadHref && effectiveDownloadLabel && (
    <a className="nav-download" href={effectiveDownloadHref} download>
      {effectiveDownloadLabel}
    </a>
  );

  return (
    <motion.header
      className={clsx("nav-shell", { scrolled: hasScrolled })}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        <NavLink className="brand" to="/">
          <span className="brand-mark">Currus</span>
          <span className="brand-sub">Baldai</span>
        </NavLink>
        <nav className={clsx("nav-links", { open: isMenuOpen })}>
          <div className="nav-primary">
            {navGroups.map((group) => (
              <div key={group.path} className="nav-group">
                <NavLink
                  to={group.path}
                  className={({ isActive }) => clsx("nav-link", { active: isActive })}
                  onClick={handleNavigate}
                >
                  {group.label}
                </NavLink>
                {group.sections && (
                  <div className="nav-dropdown">
                    {group.sections.map((section) => (
                      <NavLink
                        key={section.id}
                        to={`${group.path}#${section.id}`}
                        className={({ isActive }) =>
                          clsx("nav-dropdown-link", { active: isActive })
                        }
                        onClick={handleNavigate}
                      >
                        {section.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {downloadButton}
        </nav>
        <button className="nav-toggle" aria-label="Perjungti navigaciją" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </motion.header>
  );
};
