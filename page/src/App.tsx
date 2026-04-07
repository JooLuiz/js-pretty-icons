import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import IconsPage from "./pages/Icons";

const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Layout
      theme={theme}
      onToggleTheme={() =>
        setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/icons" element={<IconsPage theme={theme} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
