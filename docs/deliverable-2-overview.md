# Stadionhopper – Deliverable 2 Overview and Traceability

## Purpose
Deliverable 2 moves Stadionhopper from **problem understanding** to **solution design**. The artefacts in this repository are therefore intended to form one connected design foundation rather than six isolated documents.

## Traceability from Discovery to solution design

| Discovery insight / hypothesis | Product response | UX response | Domain support | Architecture support | Quality / test response |
|---|---|---|---|---|---|
| Supporters may value recording stadium visits | Check-in is a core MVP capability | Prominent Check-in action, confirmation and Visit History | User, Match, Stadium, CheckIn | Frontend -> API -> persistent CheckIn | Unit validation + integration create/retrieve + acceptance flow |
| Users need to know what local football activity is available | Match/stadium discovery | Home/Discover and Match/Stadium details | Match, Club, Stadium | API supplies match/stadium data | Integration retrieval + acceptance discovery |
| Social connection may increase engagement | Social feed and supporter interaction | Social Feed | User, Post, optional CheckIn reference | Feed endpoint + database | Post storage/retrieval and later usability feedback |
| Events may lower the threshold for participation | Events/RSVP | Events interface | Event + EventAttendance | Event API + database | RSVP/data integration tests + acceptance criteria |
| Recorded experiences should remain useful after the moment | Visit History | Confirmation -> View my visits + normal navigation | User -> CheckIn -> Match -> Stadium | Persistent storage and retrieval | Core acceptance test requires saved visit to be retrievable |
| The MVP should remain small enough to learn from | MoSCoW prioritization | Core actions before gamification/advanced features | Deliberately small core model | Layered architecture rather than microservices | Risk-based tests focus on core flow |

## How the artefacts connect

```text
Deliverable 1 Discovery
        |
        v
Personas / needs / hypotheses
        |
        v
MVP + backlog + Sprint 1 flow
        |
        +------------------+
        |                  |
        v                  v
 UX design          Domain model
        |                  |
        +--------+---------+
                 v
          Architecture
                 |
        +--------+---------+
        |                  |
        v                  v
   Git workflow      Test strategy
        |                  |
        +--------+---------+
                 v
            CI strategy
                 |
                 v
     Future implementation / feedback
```

## Repository map
- `docs/discovery/` – Discovery artefacts from Deliverable 1.
- `docs/domain/` – domain concepts, relationships and technical pseudocode.
- `docs/architecture/` – proposed solution structure, components and data flow.
- `docs/ux/` – UX rationale, prototype and usability-related artefacts.
- `docs/git/` – planned Git workflow.
- `docs/ci/` – planned continuous-integration approach.
- `docs/testing/` – unit, integration, acceptance and usability test strategy.

## Key cross-cutting example: Check-in
Check-in demonstrates how one product need travels through the design:

1. **Discovery:** recording stadium visits is a core product hypothesis.
2. **Backlog:** the supporter must be able to create and later retrieve a check-in.
3. **UX:** Check-in is prominent; success is confirmed; Visit History is accessible.
4. **Domain:** CheckIn belongs to a User and Match; Stadium is resolved through Match.
5. **Architecture:** frontend sends the action to the API, which validates and persists it.
6. **Testing:** unit tests cover rules, integration tests cover persistence/retrieval, and acceptance testing covers the end-to-end flow.
7. **CI:** these automated checks should run on Pull Requests once executable implementation exists.

## Status and limitations
The repository contains a design foundation, not a claim that the full product has been implemented. Architecture technology choices are proposals where the group has not confirmed exact technologies. The CI pipeline is a documented strategy until executable code and commands exist. The existing persona-based UX walkthrough is exploratory and is not presented as empirical real-user testing.

## Deliverable 2 completion check
The repository now contains:
- domain model with the required core concepts and a technical Git trace;
- proposed architecture with style, components, responsibilities, data flow and rationale;
- UX/wireframes/prototype including Login, Profile, Check-in, Social Feed and Events;
- Git strategy;
- CI strategy;
- test strategy covering unit, integration, acceptance, responsibilities and quality criteria.

The next phase should turn this design into executable implementation while preserving traceability between Issues, Pull Requests, tests and product decisions.
