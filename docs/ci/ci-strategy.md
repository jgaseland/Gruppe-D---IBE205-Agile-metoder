# Stadionhopper – CI Strategy

## Purpose
Continuous Integration should provide fast feedback when changes are proposed and reduce the risk of merging broken work. This is a strategy for the next implementation phase; the exact commands depend on the technologies the team selects.

## Trigger
The CI pipeline should run automatically on:
- Pull Requests targeting `main`
- pushes/merges to `main`

## Proposed pipeline
```text
Checkout
  -> Install dependencies
  -> Static checks / lint
  -> Unit tests
  -> Integration tests
  -> Build
  -> Quality gate
```

### 1. Checkout and dependencies
The pipeline retrieves the repository and installs locked project dependencies.

### 2. Static quality checks
Run formatting/linting and, if the chosen language supports it, type checking.

### 3. Unit tests
Run fast tests for isolated business rules and components.

### 4. Integration tests
Test important boundaries such as API-to-database behavior. The Check-in flow is a priority because it connects User, Match/Stadium and CheckIn data.

### 5. Build
Verify that the application can be built successfully.

### 6. Quality gate
A PR should not be treated as ready when required automated checks fail.

## Delivery pipeline
For the student project, deployment can remain simple:
`Merge to main -> build verified -> deploy/update test environment`

Automatic production deployment is not required for the initial strategy. If a hosted prototype is introduced, deployment from `main` can be automated later.

## GitHub Actions
GitHub Actions is the proposed CI platform because the repository already uses GitHub and workflow results can be attached directly to commits and Pull Requests. A workflow file should be added once the implementation stack and executable commands are known.

## Important limitation
This document describes the CI strategy. It does not claim that automated builds/tests are already running. The executable workflow must be configured when the implementation technology and commands are available.
