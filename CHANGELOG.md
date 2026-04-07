# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased] - yyyy-mm-dd

## [0.2.0] - 2026-04-07

### Added

- Added Jest test suites for icon exports and the `PrettyIcons` wrapper, including coverage execution via `test:coverage`.
- Added a GitHub Pages documentation app in `page/` (Vite + React + TypeScript + HashRouter) with Home and Icon Catalog pages.
- Added GitHub Actions workflow for Pages deployment (`.github/workflows/pages-deploy.yml`) and configured docs build/deploy pipeline.
- Added a new sparkles favicon for the docs page (`page/public/sparkles-favicon.svg`).
- Added many new icon assets/components and corresponding exports across the library.

### Changed

- Updated package metadata and packaging/build configuration (license, exports, sideEffects, bugs/homepage links, and scripts).
- Updated CI workflow to validate lint and tests in the same pipeline (`.github/workflows/ci.yml`).
- Updated icon catalog UI to show human-readable icon name, usage key (`icon="..."`), and JSX usage (`<IconName />`).
- Updated icon preview behavior in docs to use theme-aware colors (white in dark mode, black in light mode).
- Updated `README.md` icon catalog layout to the mixed HTML + Markdown table format with balanced columns.

### Fixed

- Fixed `PrettyIcons` test import to use the named export and avoid invalid element render errors.
- Fixed dark mode visibility for `CameraVariantFourIcon`, `ProfileVariantOneIcon`, and `RefreshIcon` by removing hardcoded white backgrounds.
- Fixed noisy successful test output and ensured coverage summary is printed at the end of test coverage runs.

## [0.1.2] - 2026-03-22

### Added

- Implemented Filter, Filter Variant 1, Double Chevron, Close, Question and exclamation marks, added them to README file, implemented commit and PR validations.

## [0.1.0] - 2025-02-10

### Added

- Implemented Anchor Link, Bag, Bag Variant 1, Bag Variant 2, Cart, Cart Variant 1, Cart Variant 2, Facebook, Half Heart Filled, Half Heart, Half Star Filled, Half Star, Heart Filled, Heart, Home, Home Variant 1, Instagram, Instagram Old, Location, Location Variant 1, Menu, Messenger, Profile, Profile Variant 1, Search, Star Filled, Star, Twitter and Whatsapp Icons, implemented className prop, rewrite of README file.

## [0.0.2] - 2025-02-09

### Added

- Implemented Chevron Right and Left icons and removing "any" types.

## [0.0.1] - 2025-02-09

### Added

- Package Initial Configuration and Chevron Down and Up Icons.
