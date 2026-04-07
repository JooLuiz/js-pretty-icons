import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/icons", label: "Icons", end: true },
];

const Layout = ({ children, theme, onToggleTheme }: LayoutProps) => {
  return (
    <div className="site-shell">
      <aside className="site-sidebar">
        <Link to="/" className="site-brand">
          js-pretty-icons
        </Link>
        <p className="site-description">React icon library based on SVGRepo assets.</p>
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
              🌙
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
              🌞
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
