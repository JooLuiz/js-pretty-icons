import { Link } from "react-router-dom";
import PrettyIcons, { SearchIcon, SettingsIcon } from "js-pretty-icons";

import ExternalLinks from "../components/ExternalLinks";
import InstallCommand from "../components/InstallCommand";
import PageMeta from "../components/PageMeta";
import { siteLinks } from "../constants/siteLinks";
import { siteMeta } from "../constants/siteMeta";
import { ICON_COUNT } from "../utils/iconCatalog";

const HomePage = () => {
  return (
    <div className="page-content">
      <PageMeta
        title="Home"
        description={siteMeta.siteDescription}
      />

      <section className="hero-section">
        <p className="hero-tag">JS Pretty Icons</p>
        <h1>Beautiful icons for React applications.</h1>
        <p>
          Use the default `PrettyIcons` component for dynamic icon rendering or import any icon
          component directly from the package.
        </p>
        <p className="hero-stats">{ICON_COUNT} icons available</p>
        <InstallCommand />
        <ExternalLinks />
        <div className="hero-actions">
          <Link to="/icons" className="primary-button">
            Browse icon catalog
          </Link>
          <Link to="/getting-started" className="secondary-button">
            Getting started
          </Link>
        </div>
      </section>

      <section className="value-props-section">
        <h2>Why use js-pretty-icons?</h2>
        <ul className="value-props-list">
          <li>TypeScript-first with typed icon keys</li>
          <li>Tree-shakeable package (`sideEffects: false`)</li>
          <li>
            Customizable `width`, `height`, `color`, `className`, and accessibility props
            (`ariaLabel`, `title`)
          </li>
        </ul>
      </section>

      <section className="examples-grid">
        <article className="example-card">
          <h2>Default import usage</h2>
          <pre className="code-block">
            <code>{`import PrettyIcons from "js-pretty-icons";

<PrettyIcons icon="bell" width={28} height={28} color="#2563eb" />`}</code>
          </pre>
          <div className="preview-row">
            <PrettyIcons icon="bell" width={28} height={28} color="#2563eb" />
            <PrettyIcons icon="mail-open" width={28} height={28} color="#059669" />
            <PrettyIcons icon="camera" width={28} height={28} color="#dc2626" />
          </div>
        </article>

        <article className="example-card">
          <h2>Named import usage</h2>
          <pre className="code-block">
            <code>{`import { SearchIcon, SettingsIcon } from "js-pretty-icons";

<SearchIcon width={28} height={28} color="#7c3aed" />
<SettingsIcon width={28} height={28} color="#ea580c" />`}</code>
          </pre>
          <div className="preview-row">
            <SearchIcon width={28} height={28} color="#7c3aed" />
            <SettingsIcon width={28} height={28} color="#ea580c" />
          </div>
        </article>
      </section>

      <section className="whats-new-section">
        <h2>What&apos;s new in v0.3.0</h2>
        <p>80 new icons were added across these groups:</p>
        <ul className="whats-new-list">
          <li>Browsers and web (GitHub, Chrome, Firefox, Wi-Fi, and more)</li>
          <li>Git and dev tools (Git, terminal, Docker, npm, Vercel, and more)</li>
          <li>Social and platforms (YouTube, Discord, Slack, Google, Apple, and more)</li>
          <li>Theme and status (moon, sun, warning icons)</li>
        </ul>
        <a href={siteLinks.changelog} target="_blank" rel="noreferrer">
          View full changelog
        </a>
      </section>
    </div>
  );
};

export default HomePage;
