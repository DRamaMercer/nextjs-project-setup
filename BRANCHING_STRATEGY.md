# Branching Strategy

This project follows the GitFlow branching model to manage development and releases efficiently.

## Branches

- **main**: Contains production-ready code. Only stable releases are merged here.
- **develop**: Integration branch for features. All completed features are merged here before release.
- **feature/***: Feature branches are created off `develop` for new features or improvements.
- **release/***: Release branches are created off `develop` to prepare for production releases.
- **hotfix/***: Hotfix branches are created off `main` to quickly patch production issues.

## Workflow

1. Create a feature branch from `develop` for each new feature or bug fix.
2. When a feature is complete, open a pull request to merge into `develop`.
3. After testing, create a release branch from `develop` for final preparations.
4. Merge the release branch into `main` and `develop` after release.
5. For urgent fixes, create a hotfix branch from `main`, then merge back into `main` and `develop`.

## Naming Conventions

- Feature branches: `feature/short-description`
- Release branches: `release/x.y.z`
- Hotfix branches: `hotfix/short-description`

## Pull Requests

- Require at least one approving review.
- Ensure all tests pass before merging.
- Follow coding standards and commit message guidelines.
