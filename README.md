# Project Overview

This monorepo contains multiple applications and shared packages managed with pnpm and Turborepo.

## Architecture

- **apps/**: Contains application projects such as admin, brand1-site, and api.
- **packages/**: Contains shared UI components and utilities.
- **pnpm-workspace.yaml**: Defines the pnpm workspace.
- **turbo.json**: Turborepo configuration for build and caching.

## Contribution Guidelines

- Use feature branches for all new work.
- Require pull requests with at least one approving review.
- Follow coding standards enforced by ESLint and Prettier.
- Write tests for new features and bug fixes.
- Keep commits atomic and well-documented.

## Branching Strategy

We follow GitFlow branching strategy:

- `main`: Production-ready code.
- `develop`: Integration branch for features.
- `feature/*`: Feature branches off develop.
- `release/*`: Release preparation branches.
- `hotfix/*`: Hotfix branches off main.

## Environment Setup

1. Install Node.js (version 18 or later recommended).
2. Install pnpm globally: `npm install -g pnpm`.
3. Run `pnpm install` at the root to install dependencies.
4. Use `pnpm run dev` or appropriate scripts to start apps.
5. Ensure Docker is installed and running for MCP servers.
6. Use the provided MCP servers for development and testing.

## Architecture Diagrams

(Include architecture diagrams here or links to diagrams in the docs folder)
