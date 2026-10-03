# Stadionhopper – UX Design and Wireframes

## Purpose
The UX work translates the Discovery hypotheses into concrete and testable interfaces. The prototype is not treated as a finished production application; it is a design artefact used to make the intended experience visible and reviewable.

## User needs carried forward from Discovery
- Supporters need a simple way to discover local matches and stadiums.
- Stadium visits should be easy to record and retrieve.
- Social interaction should support, rather than obscure, the core match experience.
- Potential/new supporters may need a lower threshold for finding activities and people around local football.
- Clubs need a simple way to make relevant activity visible.

The personas remain proto-personas and therefore represent hypotheses rather than validated user research.

## Primary Sprint 1 flow
`Login -> Discover -> Match/Stadium -> Check-in -> Confirmation -> Visit History`

This flow connects the product backlog to a concrete interaction sequence and gives the team a small end-to-end experience to validate.

## Required interface areas

### Login
A simple entry point with minimal information. The first version should avoid unnecessary onboarding steps before the user can explore the product.

### Profile
Shows basic user information and provides access to the user's recorded activity/visits. The profile supports identity without making profile customization the primary MVP value.

### Check-in
Check-in is a primary action because recording stadium visits is central to the product hypothesis. The action should be visually prominent on relevant match/stadium views.

### Social Feed
The feed makes supporter activity visible and supports the social product hypothesis. It should remain secondary to the core discover/check-in flow in the first version.

### Events
Events support supporter meetups and club/community activity. This addresses the hypothesis that social context may lower the threshold for attending local football.

## Supporting screens

### Home / Match Discovery
Users can browse relevant local matches/stadiums before taking action. This is particularly important for users who do not already know what match to attend.

### Match / Stadium Details
Provides the context needed before check-in: match, clubs, stadium and time.

### Confirmation
After check-in, the interface should clearly confirm success and provide an obvious next action such as **View my visits**. This avoids uncertainty about whether the visit was saved.

### Visit History
Recorded visits should be easy to retrieve from normal navigation and after confirmation. This supports the value of collecting stadium experiences over time.

## Navigation principles
- mobile-first and app-like, while remaining suitable for a responsive web application
- one obvious primary action in the core flow
- consistent terminology for Match, Stadium, Check-in and Visits
- clear feedback after state-changing actions
- core MVP functions take priority over badges, advanced search, tickets and live scores

## Design decisions and alternatives

| Decision | Initial choice | Rationale |
|---|---|---|
| Platform experience | Mobile-first responsive web | Supports stadium context while keeping implementation/testing accessible |
| Check-in placement | Prominent on Match/Stadium view | Reduces the chance that the core action is overlooked |
| After check-in | Dedicated confirmation | Makes system status and next action explicit |
| Visit History | Accessible from confirmation and normal navigation | Supports retrieval without forcing one navigation route |
| Prototype fidelity | Clickable low-fidelity prototype | Allows learning before investing in production UI |
| Scope | Core MVP before gamification | Keeps design tied to Discovery priorities |

## Prototype
The repository contains the clickable PowerPoint prototype:
`docs/ux/Stadionhopper-Clickable-Prototype-Deliverable2.pptx`

It includes the minimum required interface areas — Login, Profile, Check-in, Social Feed and Events — plus the supporting screens needed for the Sprint 1 flow.

## Validation
A persona-based walkthrough identified three UX hypotheses to watch:
1. Check-in visibility.
2. Confirmation and next action.
3. Visit History discoverability.

Because the walkthrough used fictional profiles, it is exploratory and is not empirical usability evidence. These points should be validated with real users when a testable implementation is available.

## Traceability
The UX design connects directly to the domain and architecture:
`User -> Match -> Stadium -> CheckIn -> Visit History`

The frontend presents this journey, while the proposed API/data layers provide the persistent behavior behind it.
