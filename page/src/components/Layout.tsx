import { MoonIcon, SunIcon } from "js-pretty-icons";
import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

import ExternalLinks from "./ExternalLinks";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/getting-started", label: "Getting Started", end: true },
  { to: "/icons", label: "Icons", end: true },
];

const Layout = ({ children, theme, onToggleTheme }: LayoutProps) => {
  const themeIconColor = theme === "dark" ? "#e7eefc" : "#17202e";

  return (
    <div className="site-shell">
      <aside className="site-sidebar">
        <Link to="/" className="site-brand">
          js-pretty-icons
        </Link>
        <p className="site-description">React icon library based on SVGRepo assets.</p>
        <ExternalLinks variant="compact" />
        <nav className="site-nav">
          {navItems.map((navItem) => (
            <NavLink
              key={navItem.to}
              to={navItem.to}
              end={navItem.end}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {navItem.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="theme-switch-row">
            <span
              className={`theme-icon ${theme === "dark" ? "theme-icon-active" : ""}`}
              aria-hidden="true"
            >
              <MoonIcon width={16} height={16} color={themeIconColor} />
            </span>
            <button
              type="button"
              className={`theme-switch ${theme === "light" ? "theme-switch-light" : ""}`}
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className="theme-switch-thumb" />
            </button>
            <span
              className={`theme-icon ${theme === "light" ? "theme-icon-active" : ""}`}
              aria-hidden="true"
            >
              <SunIcon width={16} height={16} color={themeIconColor} />
            </span>
          </div>
          <Footer />
        </div>
      </aside>
      <main className="site-main">{children}</main>
    </div>
  );
};

export default Layout;
