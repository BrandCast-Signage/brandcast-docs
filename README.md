# BrandCast Documentation

This repository contains the public user documentation for BrandCast, published at **[help.brandcast.app](https://help.brandcast.app)**.

## About

BrandCast is a digital signage platform that helps retail teams focus on customers, not screens. This documentation site provides guides, tutorials, and troubleshooting resources for BrandCast users.

## Development

This site is built with [Docusaurus](https://docusaurus.io/).

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This site is automatically deployed to Cloud Run when changes are pushed to the `main` branch.

## Documentation Structure

```
docs/
├── getting-started/     # Onboarding and quick start guides
├── features/            # Feature documentation
├── workflows/           # Step-by-step workflows
├── integrations/        # Third-party integrations
└── troubleshooting/     # Common issues and solutions
```

## Contributing

To update documentation:

1. Edit the relevant markdown files in `docs/`
2. Test locally with `npm start`
3. Commit and push to `main`
4. Changes will be automatically deployed

## Related Repositories

- [brandcast](https://github.com/BrandCast-Signage/brandcast) - Main application code
- [familycast-docs](https://github.com/BrandCast-Signage/familycast-docs) - FamilyCast documentation

## License

Copyright © 2025 BrandCast. All rights reserved.
