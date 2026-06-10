# js-pretty-icons

JS Pretty Icons is a component library with a lot of beautiful and customizable icons, all of them from SVGRepo website.

NPM Package: [js-pretty-icons - npm](https://www.npmjs.com/package/js-pretty-icons)

## Installation

```bash
npm install js-pretty-icons
```

## Usage

#### Recommended Usage

You can import a PrettyIcon Component from "js-pretty-icons" library as a default import.

```typescript
import PrettyIcons from "js-pretty-icons";

// Without custom width, height, color and className
return <PrettyIcons icon="chevron-down" />;

// With custom width, height, color and className
return (
  <PrettyIcons
    icon="chevron-up"
    width={32}
    height={32}
    color="#FF0000"
    className="custom-class-chevron-down"
  />
);
```

#### Other Usage

You can import the specific Icon Component from "js-pretty-icons" library as a non-default import.

```typescript
import { ChevronDownIcon } from "js-pretty-icons";

// Without custom width, height, color and className
return <ChevronDownIcon />;

// With custom width, height, color and className
return (
  <ChevronDownIcon
    width={32}
    height={32}
    color="#FF0000"
    className="custom-class-chevron-down"
  />
);
```

## Props


| Prop        | Tipo   | Descrição                                                                          | Obrigatório |
| ----------- | ------ | ---------------------------------------------------------------------------------- | ----------- |
| `icon`      | string | Icon to be showed.                                                                 | Sim         |
| `width`     | number | Icon width in pixels (default: 32px).                                              | Não         |
| `height`    | number | Icon height in pixels (default: 32px).                                             | Não         |
| `color`     | string | Icon color (default: "#000000").                                                   | Não         |
| `className` | string | Icon className (always includes {icon-name}-icon classes, i.e. chevron-down-icon). | Não         |


## Available Icons

<table style="background-color: #0d1117">
<tr></tr>
<tr>
<td>

| Name                 | Icon                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------- |
| alarm | <img src="./public/assets/alarm-clock-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| alarm-variant-1 | <img src="./public/assets/alarm-clock-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| anchor-link | <img src="./public/assets/anchor-link-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| apple | <img src="./public/assets/apple-173-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| arrow-down | <img src="./public/assets/arrow-sm-down-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| arrow-left | <img src="./public/assets/arrow-sm-left-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| arrow-right | <img src="./public/assets/arrow-sm-right-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| arrow-up | <img src="./public/assets/arrow-sm-up-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bag | <img src="./public/assets/bag-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bag-variant-1 | <img src="./public/assets/bag-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bag-variant-2 | <img src="./public/assets/cart-2-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bell | <img src="./public/assets/bell-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bell-slash | <img src="./public/assets/bell-slash-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bell-slash-variant-1 | <img src="./public/assets/bell-off-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bell-variant-1 | <img src="./public/assets/bell-svgrepo-com(2).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bell-variant-2 | <img src="./public/assets/bell-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bitbucket | <img src="./public/assets/logo-bitbucket-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bitbucket-variant-1 | <img src="./public/assets/bitbucket-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bookmark | <img src="./public/assets/save-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| brave | <img src="./public/assets/brave-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bug | <img src="./public/assets/bug-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| bug-slash | <img src="./public/assets/bug-slash-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| calendar | <img src="./public/assets/calendar-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| calendar-variant-1 | <img src="./public/assets/calendar-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| camera | <img src="./public/assets/camera-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| camera-slash | <img src="./public/assets/camera-slash-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| camera-variant-1 | <img src="./public/assets/camera-alt-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| camera-variant-2 | <img src="./public/assets/camera-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| camera-variant-3 | <img src="./public/assets/camera-square-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| camera-variant-4 | <img src="./public/assets/camera-svgrepo-com(2).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| cart | <img src="./public/assets/cart-shopping-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| cart-variant-1 | <img src="./public/assets/cart-large-minimalistic-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| cart-variant-2 | <img src="./public/assets/cart-large-2-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chat | <img src="./public/assets/chat-bubble-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chat-check | <img src="./public/assets/chat-bubble-check-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chat-close | <img src="./public/assets/chat-bubble-x-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chat-dots-horizontal | <img src="./public/assets/chat-bubble-dots-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chat-exclamation | <img src="./public/assets/chat-bubble-exclaimation-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chat-info | <img src="./public/assets/chat-bubble-info-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chat-question | <img src="./public/assets/chat-bubble-question-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| check | <img src="./public/assets/check-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| check-circle | <img src="./public/assets/check-circle-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chevron-down | <img src="./public/assets/chevron-down-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chevron-left | <img src="./public/assets/chevron-left-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chevron-right | <img src="./public/assets/chevron-right-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chevron-up | <img src="./public/assets/chevron-up-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| chrome | <img src="./public/assets/chrome-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| clock | <img src="./public/assets/clock-ten-thirty-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| clock-variant-1 | <img src="./public/assets/clock-two-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| clock-variant-2 | <img src="./public/assets/clock-twelve-thirty-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| close | <img src="./public/assets/close-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| cloud-download | <img src="./public/assets/download-cloud-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| cloud-download-variant-1 | <img src="./public/assets/download1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| code | <img src="./public/assets/code-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| code-variant-1 | <img src="./public/assets/code-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| copy | <img src="./public/assets/copy-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| copy-variant-1 | <img src="./public/assets/copy-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| discord | <img src="./public/assets/discord-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| discord-variant-1 | <img src="./public/assets/discord-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| docker | <img src="./public/assets/docker-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| document | <img src="./public/assets/document-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| document-variant-1 | <img src="./public/assets/document-text-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| document-variant-2 | <img src="./public/assets/document-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| dots-horizontal | <img src="./public/assets/dots-horizontal-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| dots-vertical | <img src="./public/assets/dots-vertical-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| double-chevron-down | <img src="./public/assets/double-chevron-down-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| double-chevron-left | <img src="./public/assets/double-chevron-left-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| double-chevron-right | <img src="./public/assets/double-chevron-right-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| double-chevron-up | <img src="./public/assets/double-chevron-up-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| download | <img src="./public/assets/download-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| download-variant-1 | <img src="./public/assets/download-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| download-variant-2 | <img src="./public/assets/download-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| edit-image | <img src="./public/assets/image-pen-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |

</td>
<td>

| Name                 | Icon                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------- |
| exclamation-mark | <img src="./public/assets/exclamation-mark-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| external-link | <img src="./public/assets/external-link-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| eye | <img src="./public/assets/eye-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| eye-closed | <img src="./public/assets/eye-closed-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| eye-slash | <img src="./public/assets/eye-slash-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| eye-slash-variant-1 | <img src="./public/assets/eye-slash-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| eye-variant-1 | <img src="./public/assets/eye-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| facebook | <img src="./public/assets/facebook-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| feed | <img src="./public/assets/blog-feed-media-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| filter | <img src="./public/assets/filter-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| filter-variant-1 | <img src="./public/assets/filter-variant-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| firefox | <img src="./public/assets/firefox-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| folder | <img src="./public/assets/folder-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| folder-variant-1 | <img src="./public/assets/folder-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| folder-variant-2 | <img src="./public/assets/folder-svgrepo-com(2).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git | <img src="./public/assets/git-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git-branch | <img src="./public/assets/git-branch-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git-branch-variant-1 | <img src="./public/assets/git-branch-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git-commit | <img src="./public/assets/git-commit-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git-commit-variant-1 | <img src="./public/assets/git-commit-variant-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git-merge | <img src="./public/assets/git-merge-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git-merge-variant-1 | <img src="./public/assets/git-merge-variant-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git-pull-request | <img src="./public/assets/git-pull-request-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git-pull-request-variant-1 | <img src="./public/assets/git-pull-request-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| git-variant-1 | <img src="./public/assets/git-variant-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| github | <img src="./public/assets/github.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| gitlab | <img src="./public/assets/gitlab-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| gitlab-variant-1 | <img src="./public/assets/gitlab-variant-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| google | <img src="./public/assets/logo-google-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| google-drive | <img src="./public/assets/google-drive-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| google-meet | <img src="./public/assets/googlehangoutsmeet-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| google-variant-1 | <img src="./public/assets/google-icon-branding-oneline-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| half-heart | <img src="./public/assets/heart-half-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| half-heart-filled | <img src="./public/assets/heart-half-filled-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| half-star | <img src="./public/assets/star-sharp-half-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| half-star-filled | <img src="./public/assets/star-half-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| heart | <img src="./public/assets/heart-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| heart-filled | <img src="./public/assets/heart-filled-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| home | <img src="./public/assets/home-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| home-variant-1 | <img src="./public/assets/home-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| image | <img src="./public/assets/image-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| image-check | <img src="./public/assets/image-square-check-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| image-close | <img src="./public/assets/image-square-xmark-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| image-minus | <img src="./public/assets/image-minus-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| image-plus | <img src="./public/assets/image-plus-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| image-variant-1 | <img src="./public/assets/image-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| info | <img src="./public/assets/info-circle-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| instagram | <img src="./public/assets/instagram-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| instagram-old | <img src="./public/assets/instagram-old-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| internet-explorer | <img src="./public/assets/internet-explorer-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| internet-globe | <img src="./public/assets/internet-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| internet-globe-variant-1 | <img src="./public/assets/internet-variant-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| linkedin | <img src="./public/assets/linkedin-161-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| linkedin-variant-1 | <img src="./public/assets/linkedin-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| location | <img src="./public/assets/location-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| location-variant-1 | <img src="./public/assets/location-pin-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| mail | <img src="./public/assets/mail-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| mail-open | <img src="./public/assets/mail-open-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| mail-variant-1 | <img src="./public/assets/mail-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| menu | <img src="./public/assets/menu-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| messenger | <img src="./public/assets/facebook-messenger-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| meta | <img src="./public/assets/meta-logo-facebook-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| microsoft | <img src="./public/assets/microsoft-150-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| microsoft-edge | <img src="./public/assets/microsoftedge-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| microsoft-teams | <img src="./public/assets/microsoft-teams-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| minus | <img src="./public/assets/minus-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| minus-circle | <img src="./public/assets/minus-circle-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| mobile-phone | <img src="./public/assets/mobile-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| mobile-phone-variant-1 | <img src="./public/assets/mobile-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| moon | <img src="./public/assets/moon-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| moon-in-the-sea | <img src="./public/assets/moon-fog-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| moon-variant-1 | <img src="./public/assets/moon-variant-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| npm | <img src="./public/assets/npm-fill-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |

</td>
<td>

| Name                 | Icon                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------- |
| npm-variant-1 | <img src="./public/assets/npm-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| opera | <img src="./public/assets/opera-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| pause | <img src="./public/assets/pause-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| pencil | <img src="./public/assets/edit-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| pencil-variant-1 | <img src="./public/assets/edit-3-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| pencil-variant-2 | <img src="./public/assets/edit-2-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| phone | <img src="./public/assets/phone-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| phone-variant-1 | <img src="./public/assets/phone-calling-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| pinterest | <img src="./public/assets/pinterest-180-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| pinterest-variant-1 | <img src="./public/assets/pinterest-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| play | <img src="./public/assets/play-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| play-pause | <img src="./public/assets/play-pause-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| plus | <img src="./public/assets/plus-large-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| plus-circle | <img src="./public/assets/plus-circle-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| plus-minus | <img src="./public/assets/plus-minus-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| profile | <img src="./public/assets/profile-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| profile-variant-1 | <img src="./public/assets/profile-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| question-mark | <img src="./public/assets/question-mark-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| reddit | <img src="./public/assets/reddit-143-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| refresh | <img src="./public/assets/refresh-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| refresh-variant-1 | <img src="./public/assets/refresh-cw-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| safari | <img src="./public/assets/safari-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| save | <img src="./public/assets/save-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| save-variant-1 | <img src="./public/assets/save-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| save-variant-2 | <img src="./public/assets/save-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| search | <img src="./public/assets/search-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| send | <img src="./public/assets/send-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| send-variant-1 | <img src="./public/assets/send-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| send-variant-2 | <img src="./public/assets/send-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| send-variant-3 | <img src="./public/assets/send-2-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| send-variant-4 | <img src="./public/assets/send-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| settings | <img src="./public/assets/settings-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| settings-variant-1 | <img src="./public/assets/settings-minimalistic-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| signal | <img src="./public/assets/signal-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| skype | <img src="./public/assets/skype-170-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| slack | <img src="./public/assets/slack-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| snapchat | <img src="./public/assets/snapchat-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| snapchat-variant-1 | <img src="./public/assets/snapchat-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| stackoverflow | <img src="./public/assets/stackoverflow-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| star | <img src="./public/assets/star-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| star-filled | <img src="./public/assets/star-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| sun | <img src="./public/assets/sun-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| sun-in-the-sea | <img src="./public/assets/sun-fog-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| sun-variant-1 | <img src="./public/assets/sun-variant-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| telegram | <img src="./public/assets/telegram-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| telegram-variant-1 | <img src="./public/assets/telegram-alt-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| terminal | <img src="./public/assets/terminal-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| terminal-variant-1 | <img src="./public/assets/terminal-variant-1-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| terminal-variant-2 | <img src="./public/assets/terminal-variant-2-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| tiktok | <img src="./public/assets/tiktok-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| trash | <img src="./public/assets/trash-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| trash-variant-1 | <img src="./public/assets/trash-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| twitch | <img src="./public/assets/twitch-182-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| twitter | <img src="./public/assets/twitter-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| upload | <img src="./public/assets/upload-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| upload-variant-1 | <img src="./public/assets/upload-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| upload-variant-2 | <img src="./public/assets/upload-svgrepo-com(1).svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| vercel | <img src="./public/assets/vercel-fill-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| vercel-variant-1 | <img src="./public/assets/vercel-logo-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| warning-circle | <img src="./public/assets/warning-circle-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| warning-triangle | <img src="./public/assets/warning-triangle-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| whatsapp | <img src="./public/assets/whatsapp-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| wifi | <img src="./public/assets/wifi-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| wifi-exclamation | <img src="./public/assets/wifi-exclamation-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| wifi-low | <img src="./public/assets/wifi-fair-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| wifi-medium | <img src="./public/assets/wifi-good-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| wifi-slash | <img src="./public/assets/wifi-slash-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| wifi-very-low | <img src="./public/assets/wifi-weak-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| windows | <img src="./public/assets/microsoft-windows-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| youtube | <img src="./public/assets/youtube-168-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| youtube-variant-1 | <img src="./public/assets/youtube-svgrepo-com.svg" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |
| &nbsp; | <img src="./public/assets/&nbsp;" width="32" height="32" style="padding: 2px; border-radius: 4px;"> |

</td>
</tr>
</table>

All icons are sourced from [SVG Repo](https://www.svgrepo.com/) and you can find the icon page on the icon file inside `assets` folder.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT