export type IconCategoryDefinition = {
  id: string;
  label: string;
  icons: string[];
};

export const iconCategoryDefinitions: IconCategoryDefinition[] = [
  {
    id: "browsers-web",
    label: "Browsers & Web",
    icons: [
      "brave", "chrome", "external-link", "feed", "firefox", "github",
      "internet-explorer", "internet-globe", "internet-globe-variant-1",
      "microsoft-edge", "opera", "safari", "wifi", "wifi-exclamation",
      "wifi-low", "wifi-medium", "wifi-slash", "wifi-very-low",
    ],
  },
  {
    id: "dev-git",
    label: "Dev & Git",
    icons: [
      "bitbucket", "bitbucket-variant-1", "bug", "bug-slash", "code",
      "code-variant-1", "docker", "git", "git-branch", "git-branch-variant-1",
      "git-commit", "git-commit-variant-1", "git-merge", "git-merge-variant-1",
      "git-pull-request", "git-pull-request-variant-1", "git-variant-1",
      "gitlab", "gitlab-variant-1", "npm", "npm-variant-1", "stackoverflow",
      "terminal", "terminal-variant-1", "terminal-variant-2", "vercel",
      "vercel-variant-1",
    ],
  },
  {
    id: "social-platforms",
    label: "Social & Platforms",
    icons: [
      "apple", "discord", "discord-variant-1", "facebook", "google",
      "google-drive", "google-meet", "google-variant-1", "instagram",
      "instagram-old", "linkedin", "linkedin-variant-1", "meta", "microsoft",
      "microsoft-teams", "pinterest", "pinterest-variant-1", "reddit",
      "signal", "skype", "slack", "snapchat", "snapchat-variant-1", "telegram",
      "telegram-variant-1", "tiktok", "twitch", "twitter", "windows",
      "youtube", "youtube-variant-1",
    ],
  },
  {
    id: "theme-status",
    label: "Theme & Status",
    icons: [
      "moon", "moon-in-the-sea", "moon-variant-1", "sun", "sun-in-the-sea",
      "sun-variant-1", "warning-circle", "warning-triangle",
    ],
  },
  {
    id: "ui-navigation",
    label: "UI & Navigation",
    icons: [
      "alarm", "alarm-variant-1", "anchor-link", "arrow-down", "arrow-left",
      "arrow-right", "arrow-up", "check", "check-circle", "chevron-down",
      "chevron-left", "chevron-right", "chevron-up", "close",
      "double-chevron-down", "double-chevron-left", "double-chevron-right",
      "double-chevron-up", "dots-horizontal", "dots-vertical",
      "exclamation-mark", "eye", "eye-closed", "eye-slash",
      "eye-slash-variant-1", "eye-variant-1", "filter", "filter-variant-1",
      "home", "home-variant-1", "info", "location", "location-variant-1",
      "menu", "minus", "minus-circle", "pause", "play", "play-pause", "plus",
      "plus-circle", "plus-minus", "profile", "profile-variant-1",
      "question-mark", "refresh", "refresh-variant-1", "search", "settings",
      "settings-variant-1",
    ],
  },
  {
    id: "commerce",
    label: "Commerce",
    icons: [
      "bag", "bag-variant-1", "bag-variant-2", "bookmark", "cart",
      "cart-variant-1", "cart-variant-2", "half-heart", "half-heart-filled",
      "half-star", "half-star-filled", "heart", "heart-filled", "save",
      "save-variant-1", "save-variant-2", "star", "star-filled",
    ],
  },
  {
    id: "communication",
    label: "Communication",
    icons: [
      "bell", "bell-slash", "bell-slash-variant-1", "bell-variant-1",
      "bell-variant-2", "chat", "chat-check", "chat-close",
      "chat-dots-horizontal", "chat-exclamation", "chat-info", "chat-question",
      "mail", "mail-open", "mail-variant-1", "messenger", "mobile-phone",
      "mobile-phone-variant-1", "phone", "phone-variant-1", "send",
      "send-variant-1", "send-variant-2", "send-variant-3", "send-variant-4",
      "whatsapp",
    ],
  },
  {
    id: "media-files",
    label: "Media & Files",
    icons: [
      "calendar", "calendar-variant-1", "camera", "camera-slash",
      "camera-variant-1", "camera-variant-2", "camera-variant-3",
      "camera-variant-4", "clock", "clock-variant-1", "clock-variant-2",
      "cloud-download", "cloud-download-variant-1", "copy", "copy-variant-1",
      "document", "document-variant-1", "document-variant-2", "download",
      "download-variant-1", "download-variant-2", "edit-image", "folder",
      "folder-variant-1", "folder-variant-2", "image", "image-check",
      "image-close", "image-minus", "image-plus", "image-variant-1", "pencil",
      "pencil-variant-1", "pencil-variant-2", "trash", "trash-variant-1",
      "upload", "upload-variant-1", "upload-variant-2",
    ],
  },
];

const GENERAL_CATEGORY_ID = "general";

const usageNameToCategoryMap = new Map<string, string>();

iconCategoryDefinitions.forEach((category) => {
  category.icons.forEach((usageName) => {
    usageNameToCategoryMap.set(usageName, category.id);
  });
});

const categoryLabelMap = new Map(
  iconCategoryDefinitions.map((category) => [category.id, category.label])
);

categoryLabelMap.set(GENERAL_CATEGORY_ID, "General");

export const getCategoryForUsageName = (usageName: string): string =>
  usageNameToCategoryMap.get(usageName) ?? GENERAL_CATEGORY_ID;

export const getCategoryLabel = (categoryId: string): string =>
  categoryLabelMap.get(categoryId) ?? "General";

export const allCategoryFilterOptions = [
  { id: "all", label: "All" },
  ...iconCategoryDefinitions.map((category) => ({
    id: category.id,
    label: category.label,
  })),
  { id: GENERAL_CATEGORY_ID, label: "General" },
];
