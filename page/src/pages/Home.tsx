import PrettyIcons from "js-pretty-icons";

const HomePage = () => {
  return (
    <div className="page-content">
      <section className="hero-section">
        <p className="hero-tag">JS Pretty Icons</p>
        <h1>Beautiful icons for React applications.</h1>
        <p>
          Use the default `PrettyIcons` component for dynamic icon rendering or import any icon
          component directly from the package.
        </p>
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
          <p>Open the Icons page to preview every exported component.</p>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
