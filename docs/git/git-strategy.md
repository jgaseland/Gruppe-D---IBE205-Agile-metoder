# Stadionhopper – Git Strategy

## Purpose
GitHub is used as the shared technical trace for Stadionhopper. The workflow should keep work visible, make changes reviewable and support frequent integration without adding unnecessary process.

## Proposed workflow
`Issue -> Branch -> Commit -> Pull Request -> Review -> Merge to main`

### Issues
Work that changes the product, documentation, architecture or quality approach should normally begin as a GitHub Issue. The issue describes the goal, relevant acceptance criteria and dependencies.

### Branches
Changes are made on short-lived branches created from `main`.

Suggested naming:
- `feature/<short-name>` for product functionality
- `docs/<short-name>` for documentation/design work
- `fix/<short-name>` for corrections
- `test/<short-name>` for test-related work

Branches should stay small enough to review and merge frequently.

### Commits
Commits should describe the change, for example:
- `Add proposed solution architecture`
- `Update README for Deliverable 2`
- `Add check-in validation tests`

### Pull Requests
A Pull Request is used before merging substantial work into `main`. The PR should explain what changed, why it changed and any decisions that still need confirmation.

### Review
The preferred process is review by another team member before merge. Review should focus on correctness, traceability to the task/user need, understandable documentation/code and potential quality risks.

If peer review is temporarily unavailable, the PR should still be used to preserve a visible change record. Lack of peer review must not be represented as completed review.

### Merge
After review, or after explicitly documenting why review was unavailable, the branch can be merged into `main`. Small PRs are preferred.

## Current example
The Deliverable 2 repository reorganization was created from Issue #19 on branch `docs/deliverable-2-structure` and proposed through PR #20. This provides a concrete example of the planned workflow.

## Rationale
A lightweight branch-and-PR workflow supports transparency, traceability and collective ownership while remaining realistic for a small student team. Direct changes to `main` should be avoided for substantial work when practical.
