# Stadionhopper – Test Strategy

## Purpose
Testing should verify both technical correctness and whether the product supports the intended user journeys. The strategy combines unit, integration, acceptance and usability testing.

## Test levels

### Unit tests
Unit tests verify isolated rules and functions.

Initial examples:
- a Match cannot have the same home and away club
- required CheckIn references are validated
- invalid input is rejected
- permission rules for administrative actions are enforced

### Integration tests
Integration tests verify that components work together.

Priority examples:
- API can retrieve Match and Stadium data
- authenticated User can create a CheckIn
- created CheckIn is persisted
- Visit History retrieves the stored CheckIn
- Posts and Events can be stored and retrieved through their relevant API paths

### Acceptance tests
Acceptance tests are derived from backlog acceptance criteria and should verify complete user-facing behavior.

Core Sprint 1 acceptance flow:
`Login -> Discover match/stadium -> Check-in -> Confirmation -> Visit History`

A key acceptance criterion is that a successful check-in can later be found in the user's visit history.

### Usability testing
Usability testing focuses on whether users understand the flow, not only whether it technically works. The Experience Lead should observe whether users can discover a match, locate Check-in, understand confirmation and find Visit History without guidance.

The existing persona-based walkthrough is exploratory and does not count as empirical user testing. Findings from real users should be recorded separately when a testable implementation is available.

## Responsibility
Quality is a shared team responsibility:
- developers create and maintain unit/integration tests for their changes
- Quality Lead coordinates quality criteria and traceability
- Experience Lead leads UX/usability validation
- PR reviewers check acceptance criteria and relevant test evidence
- Product/role leads help confirm that acceptance behavior matches the intended product value

These responsibilities describe the intended process and do not imply that every activity has already been performed.

## Quality criteria
A change is ready to merge when:
- relevant acceptance criteria are addressed
- required automated tests pass when available
- no known critical defect blocks the core flow
- the change is understandable and traceable to an Issue/requirement
- documentation is updated when a decision changes the model, architecture or UX

## Priority risk areas
1. Authentication and authorization
2. Correct Match/Stadium relationships
3. CheckIn creation and persistence
4. Visit History retrieval
5. Clear confirmation after Check-in
6. Social/event data access and permissions

## Definition of Done – initial proposal
For implementation work, Done means the agreed behavior is implemented, relevant tests pass, acceptance criteria are met, documentation is updated where needed, and the change is integrated into `main` through the agreed Git workflow.
