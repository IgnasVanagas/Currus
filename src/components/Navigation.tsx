import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";
import { downloadLink } from "../data/content";

type NavDropdownItem = {
  label: string;
  path: string;
};

type NavGroup = {
  label: string;
  path: string;
  hasCaret?: boolean;
  items?: NavDropdownItem[];
};

type NavigationProps = {
  downloadLabel?: string;
  downloadHref?: string;
};

const navGroups: NavGroup[] = [
  { label: "apie", path: "/" },
  {
    label: "Paslaugos",
    path: "/paslaugos",
    hasCaret: true,
    items: [
      { label: "Baldų dizainas ir projektavimas", path: "/paslaugos#baldu-dizainas" },
      { label: "Interjero dizainas", path: "/paslaugos#interjero-dizainas" },
      { label: "Laminuotos plokštės pjovimas ir kantavimas", path: "/paslaugos#laminuotos-plokstes" }
    ]
  },
  { label: "Kaip pateikti užsakymą?", path: "/kaip-pateikti-uzsakyma" },
  { label: "darbai", path: "/darbu-galerija" },
  { label: "Naujienos", path: "/naujienos" },
  { label: "Kontaktai", path: "/kontaktai" }
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
              group.items?.length ? (
                <div key={group.path} className="nav-group">
                  <NavLink
                    to={group.path}
                    className={({ isActive }) => clsx("nav-link", { active: isActive })}
                    onClick={handleNavigate}
                  >
                    <span className="nav-link-label">{group.label}</span>
                    {(group.hasCaret || group.items?.length) && (
                      <FiChevronDown className="nav-link-caret" aria-hidden="true" />
                    )}
                  </NavLink>
                  <div className="nav-dropdown">
                    {group.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => clsx("nav-dropdown-link", { active: isActive })}
                        onClick={handleNavigate}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={group.path}
                  to={group.path}
                  className={({ isActive }) => clsx("nav-link", { active: isActive })}
                  onClick={handleNavigate}
                >
                  <span className="nav-link-label">{group.label}</span>
                  {group.hasCaret && <FiChevronDown className="nav-link-caret" aria-hidden="true" />}
                </NavLink>
              )
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
