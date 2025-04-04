# Contributing to Unraid Connect

Thank you for your interest in contributing to Unraid Connect! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## TypeScript Import Extensions in the API Directory

When working with the API directory, you'll notice that TypeScript files are imported with `.js` extensions (e.g., `import { something } from './file.js'`) even though the actual files have `.ts` extensions. This is because:

1. We use ECMAScript modules (ESM) in our TypeScript configuration
2. When TypeScript compiles `.ts` files to `.js`, the import paths in the compiled code need to reference `.js` files
3. TypeScript doesn't automatically change the extensions in import statements during compilation
4. Using `.js` extensions in imports ensures that both TypeScript during development and Node.js in production can resolve the modules correctly

This approach follows the [official TypeScript ESM recommendation](https://www.typescriptlang.org/docs/handbook/esm-node.html) and ensures compatibility across development and production environments.

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### 1. Work Intent Process

**Before starting any development work**, you must submit a Work Intent and have it approved:

1. **Create a Work Intent**
   - Go to [Issues → New Issue → Work Intent](https://github.com/unraid/api/issues/new?template=work_intent.md)
   - Fill out the brief template describing what you want to work on
   - The issue will be automatically labeled as `work-intent` and `unapproved`

2. **Wait for Approval**
   - A core developer will review your Work Intent
   - They may ask questions or suggest changes
   - Once approved, the `unapproved` label will be removed

3. **Begin Development**
   - Only start coding after your Work Intent is approved
   - Follow the approach outlined in your approved Work Intent
   - Reference the Work Intent in your future PR

### 2. Making Changes

1. Fork the repo and create your branch from `main`
2. Make your changes
3. Ensure your commits are clear and descriptive
4. Keep your changes focused - solve one thing at a time

### 3. Pull Request Process

1. Create a pull request from your fork to our `main` branch
2. Reference the approved Work Intent in your PR description
3. Ensure the PR description clearly describes the problem and solution
4. Include screenshots or examples if applicable
5. Wait for review from the core team

**Note:** Direct pushes to the main branch are not allowed. All changes must go through the PR process.

## Developer Documentation

For detailed information about development workflows, repository organization, and other technical details, please refer to our developer documentation:

- [Development Guide](api/docs/developer/development.md) - Setup, building, and debugging instructions
- [Development Workflows](api/docs/developer/workflows.md) - Detailed workflows for local development, building, and deployment
- [Repository Organization](api/docs/developer/repo-organization.md) - High-level architecture and project structure

## Bug Reports and Feature Requests

We use GitHub issues to track bugs and feature requests:

- **Bug Report**: Use the [Bug Report Template](https://github.com/unraid/api/issues/new?template=bug_report.md)
- **Feature Request**: Use the [Feature Request Template](https://github.com/unraid/api/issues/new?template=feature_request.md)

For Unraid Connect specific issues (Flash Backup, connect.myunraid.net, mothership connectivity), please submit through our support portal instead.

## License

By contributing, you agree that your contributions will be licensed under the same terms as the main project.
