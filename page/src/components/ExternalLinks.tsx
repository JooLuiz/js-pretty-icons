import { siteLinks } from "../constants/siteLinks";
import { siteMeta } from "../constants/siteMeta";

type ExternalLinksProps = {
  variant?: "default" | "compact";
};

const ExternalLinks = ({ variant = "default" }: ExternalLinksProps) => {
  return (
    <div
      className={
        variant === "compact" ? "external-links external-links-compact" : "external-links"
      }
    >
      <a
        href={siteLinks.npm}
        target="_blank"
        rel="noreferrer"
        className="external-link-badge"
      >
        npm v{siteMeta.version}
      </a>
      <a
        href={siteLinks.githubRepo}
        target="_blank"
        rel="noreferrer"
        className="external-link-badge"
      >
        GitHub
      </a>
      {variant === "default" && (
        <>
          <a
            href={siteLinks.changelog}
            target="_blank"
            rel="noreferrer"
            className="external-link-badge"
          >
            Changelog
          </a>
          <a
            href={siteLinks.license}
            target="_blank"
            rel="noreferrer"
            className="external-link-badge"
          >
            License
          </a>
        </>
      )}
    </div>
  );
};

export default ExternalLinks;
