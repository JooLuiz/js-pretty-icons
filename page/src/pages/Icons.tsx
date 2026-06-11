import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import IconCard from "../components/IconCard";
import PageMeta from "../components/PageMeta";
import {
  allCategoryFilterOptions,
  getCategoryForUsageName,
} from "../data/iconCategories";
import { ICON_COUNT, iconPreviewItems } from "../utils/iconCatalog";

type IconsPageProps = {
  theme: "dark" | "light";
};

const IconsPage = ({ theme }: IconsPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [iconSize, setIconSize] = useState(28);
  const [customColor, setCustomColor] = useState<string | null>(null);
  const [useThemeColor, setUseThemeColor] = useState(true);

  const searchTerm = searchParams.get("search") ?? "";
  const selectedCategory = searchParams.get("category") ?? "all";
  const themeColor = theme === "dark" ? "#ffffff" : "#000000";
  const iconColor = useThemeColor ? themeColor : (customColor ?? themeColor);

  const filteredIconPreviewItems = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return iconPreviewItems.filter((iconPreviewItem) => {
      const matchesSearch =
        !normalizedSearchTerm ||
        iconPreviewItem.displayName.toLowerCase().includes(normalizedSearchTerm) ||
        iconPreviewItem.exportName.toLowerCase().includes(normalizedSearchTerm) ||
        iconPreviewItem.usageName.toLowerCase().includes(normalizedSearchTerm);

      const iconCategory = getCategoryForUsageName(iconPreviewItem.usageName);
      const matchesCategory =
        selectedCategory === "all" || iconCategory === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const updateSearchParam = (key: string, value: string) => {
    const nextSearchParams = new URLSearchParams(searchParams);

    if (value) {
      nextSearchParams.set(key, value);
    } else {
      nextSearchParams.delete(key);
    }

    setSearchParams(nextSearchParams);
  };

  const handleColorChange = (nextColor: string) => {
    setCustomColor(nextColor);
    setUseThemeColor(false);
  };

  const handleResetThemeColor = () => {
    setUseThemeColor(true);
    setCustomColor(null);
  };

  return (
    <div className="page-content">
      <PageMeta
        title="Icon Catalog"
        description="Browse and search all js-pretty-icons React components."
      />

      <section className="section-header">
        <h1>Icon Catalog</h1>
        <p>
          Browse all exported icons from `js-pretty-icons`. Search by component name, filter by
          category, and tweak preview controls.
        </p>
      </section>

      <section className="controls-panel">
        <label>
          Search
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => updateSearchParam("search", event.target.value)}
            placeholder="Example: BellIcon or bell"
          />
        </label>
        <label>
          Size
          <input
            type="number"
            min={12}
            max={64}
            value={iconSize}
            onChange={(event) => setIconSize(Number(event.target.value))}
          />
        </label>
        <label>
          Color
          <div className="color-control-row">
            <input
              type="color"
              value={iconColor}
              onChange={(event) => handleColorChange(event.target.value)}
            />
            <button
              type="button"
              className="text-button"
              onClick={handleResetThemeColor}
              disabled={useThemeColor}
            >
              Use theme color
            </button>
          </div>
        </label>
      </section>

      <section className="category-filter-panel" aria-label="Category filters">
        {allCategoryFilterOptions.map((categoryOption) => (
          <button
            key={categoryOption.id}
            type="button"
            className={
              selectedCategory === categoryOption.id
                ? "category-pill category-pill-active"
                : "category-pill"
            }
            onClick={() => updateSearchParam("category", categoryOption.id === "all" ? "" : categoryOption.id)}
          >
            {categoryOption.label}
          </button>
        ))}
      </section>

      <p className="results-summary">
        Showing {filteredIconPreviewItems.length} of {ICON_COUNT} icons
      </p>

      {filteredIconPreviewItems.length === 0 ? (
        <section className="empty-state">
          <h2>No icons found</h2>
          <p>
            {searchTerm
              ? `No icons found for "${searchTerm}".`
              : "No icons match the selected category."}
          </p>
          <button
            type="button"
            className="text-button"
            onClick={() => setSearchParams({})}
          >
            Clear filters
          </button>
        </section>
      ) : (
        <section className="icon-grid" aria-label="Icons list">
          {filteredIconPreviewItems.map((iconPreviewItem) => (
            <IconCard
              key={iconPreviewItem.exportName}
              iconPreviewItem={iconPreviewItem}
              iconSize={iconSize}
              iconColor={iconColor}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default IconsPage;
