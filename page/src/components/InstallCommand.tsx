import { siteMeta } from "../constants/siteMeta";

import CopyButton from "./CopyButton";

const InstallCommand = () => {
  return (
    <div className="install-command">
      <div className="install-command-row">
        <pre className="code-block install-code-block">
          <code>{siteMeta.installCommand}</code>
        </pre>
        <CopyButton value={siteMeta.installCommand} label="install command" />
      </div>
      <p className="install-note">{siteMeta.peerDependencyNote}</p>
    </div>
  );
};

export default InstallCommand;
