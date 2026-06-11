import ExternalLinks from "../components/ExternalLinks";
import InstallCommand from "../components/InstallCommand";
import PageMeta from "../components/PageMeta";
import { siteLinks } from "../constants/siteLinks";
import { siteMeta } from "../constants/siteMeta";

const propsReference = [
  {
    prop: "icon",
    type: "string",
    defaultValue: "—",
    required: "Yes (PrettyIcons only)",
    description: "Kebab-case icon key",
  },
  {
    prop: "width",
    type: "number",
    defaultValue: "32",
    required: "No",
    description: "Icon width in pixels",
  },
  {
    prop: "height",
    type: "number",
    defaultValue: "32",
    required: "No",
    description: "Icon height in pixels",
  },
  {
    prop: "color",
    type: "string",
    defaultValue: "#000000",
    required: "No",
    description: "Icon stroke or fill color",
  },
  {
    prop: "className",
    type: "string",
    defaultValue: "—",
    required: "No",
    description: "Extra CSS class; always includes `{icon-name}-icon`",
  },
];

const GettingStartedPage = () => {
  return (
    <div className="page-content">
      <PageMeta
        title="Getting Started"
        description="Install and use js-pretty-icons in React applications."
      />

      <section className="section-header">
        <h1>Getting Started</h1>
        <p>Install the package and choose the usage pattern that fits your app.</p>
      </section>

      <section className="docs-section">
        <h2>Installation</h2>
        <InstallCommand />
        <ExternalLinks variant="compact" />
      </section>

      <section className="docs-section">
        <h2>Usage patterns</h2>
        <article className="example-card">
          <h3>PrettyIcons default import</h3>
          <p>Use when the icon name is chosen at runtime.</p>
          <pre className="code-block">
            <code>{`import PrettyIcons from "${siteMeta.packageName}";

return <PrettyIcons icon="chevron-down" color="#2563eb" />;`}</code>
          </pre>
        </article>
        <article className="example-card">
          <h3>Named component imports</h3>
          <p>Use when icons are known at build time for clearer static imports.</p>
          <pre className="code-block">
            <code>{`import { ChevronDownIcon } from "${siteMeta.packageName}";

return <ChevronDownIcon width={32} height={32} color="#2563eb" />;`}</code>
          </pre>
        </article>
      </section>

      <section className="docs-section">
        <h2>Props reference</h2>
        <div className="props-table-wrapper">
          <table className="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {propsReference.map((propRow) => (
                <tr key={propRow.prop}>
                  <td>
                    <code>{propRow.prop}</code>
                  </td>
                  <td>{propRow.type}</td>
                  <td>{propRow.defaultValue}</td>
                  <td>{propRow.required}</td>
                  <td>{propRow.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="docs-section">
        <h2>TypeScript</h2>
        <p>
          The `icon` prop is typed through the exported `Icons` union, so invalid icon keys are
          caught during development.
        </p>
      </section>

      <section className="docs-section">
        <h2>Attribution</h2>
        <p>
          Icons are sourced from{" "}
          <a href={siteLinks.svgRepo} target="_blank" rel="noreferrer">
            SVGRepo
          </a>
          . This package is released under the MIT license.
        </p>
      </section>
    </div>
  );
};

export default GettingStartedPage;
