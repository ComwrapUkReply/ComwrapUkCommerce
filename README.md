# Edge Delivery Services + Adobe Commerce Boilerplate (Experimental)
This project boilerplate is for Edge Delivery Services projects that integrate with Adobe Commerce.

## Environments
- Preview: https://main--ComwrapUkCommerce--ComwrapUkReply.hlx.page/
- Live: https://main--ComwrapUkCommerce--ComwrapUkReply.hlx.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Add your Adobe Commerce SaaS configuration in the `configs.xlsx` sheet in your content repository.
1. Install the [AEM CLI](https://github.com/adobe/aem-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `ComwrapUkCommerce` directory in your favorite IDE and start coding :)
