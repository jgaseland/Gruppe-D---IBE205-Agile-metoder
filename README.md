# Stadionhopper

**IBE205 Agile Methods -- Nordmøre og Romsdal Fotballkrets pilot**

Stadionhopper is a digital platform for community-building around local
football. The project explores how stadium visits can become more
social, visible, and engaging by connecting supporters, clubs, and the
football association in one local-football context.

This repository supports the team's agile work throughout the
Stadionhopper project. It is used to make priorities, tasks, decisions,
and progress visible as the project moves from **Discovery** to
**Design**, **Development**, and finally **Release & Reflection**.

------------------------------------------------------------------------

## Product vision

The vision of Stadionhopper is to strengthen local football communities
by making it easier and more motivating to participate in local football
experiences.

The platform aims to help supporters:

-   discover local football activity,
-   record stadium visits,
-   share experiences,
-   connect with other supporters, and
-   participate in football-related events.

For clubs and Nordmøre og Romsdal Fotballkrets, the platform may provide
increased visibility, stronger supporter engagement, and better insight
into activity around local football.

> **Important:** These expected outcomes are hypotheses. The project
> follows an agile approach in which assumptions are tested through
> small increments, feedback, and continuous reprioritization.

## Problem we are exploring

Local football activity is spread across clubs, stadiums, websites,
social media, and messaging channels. This can make it difficult to
create one coherent community experience around local matches.

Our Discovery work therefore focuses on questions such as:

-   Do supporters want to record and share stadium visits?
-   Can social connections increase engagement around local football?
-   Can events or meetups lower the threshold for attending matches?
-   Do clubs value a dedicated channel for supporter engagement?
-   Can engagement data provide useful insight for clubs and the
    football association?

The goal is not simply to ask **"Can we build Stadionhopper?"**, but to
learn **"Which parts of Stadionhopper are worth building?"**

------------------------------------------------------------------------

## MVP scope

We use **MoSCoW prioritization** to protect the scope and focus on
functionality that can validate the core product idea.

### Must Have

-   Authentication and basic user profile
-   Stadium check-in with photo/basic metadata
-   Social feed
-   Follow/friend functionality
-   Simple club/stadium administration

### Should Have

-   Events / meetups with RSVP
-   Basic moderation
-   Onboarding
-   Push notifications

### Could Have

-   Badges and gamification
-   Advanced search/discovery

### Won't Have -- first MVP

-   Ticket integration
-   Marketplace
-   Live-score integration

The priorities are not based on which features seem most exciting. They
reflect what we currently believe is necessary to create and validate
value with the smallest realistic scope.

------------------------------------------------------------------------

## Core users and stakeholders

The Discovery work considers several perspectives:

  -----------------------------------------------------------------------
  Group                               Main interest
  ----------------------------------- -----------------------------------
  Supporters                          Simple, social, and relevant
                                      local-football experiences

  Potential/new supporters            Lower threshold for discovering and
                                      attending local matches

  Football clubs                      Visibility, attendance, supporter
                                      engagement, and useful insight

  Nordmøre og Romsdal Fotballkrets    Community development and
                                      cross-club insight

  Sponsors/local partners             Potential future value from visible
                                      local engagement

  Development team                    Delivering and learning through an
                                      agile process
  -----------------------------------------------------------------------

Our personas are **proto-personas** based on the project material. They
are treated as hypotheses and should be revised when we receive real
stakeholder or pilot feedback.

------------------------------------------------------------------------

## Initial product backlog

The backlog is managed through GitHub Issues / GitHub Projects. User
stories follow the format:

> **As a** \[user\], **I want** \[functionality\], **so that**
> \[value\].

Each relevant backlog item should include:

-   user story,
-   acceptance criteria,
-   MoSCoW priority,
-   relevant assumptions or dependencies,
-   status / sprint assignment.

Example:

> **As a supporter, I want to check in at a stadium, so that I can
> record my visit.**

**Acceptance criteria** - An authenticated user can create a check-in
linked to a stadium. - A successful check-in is stored. - The check-in
is visible in the user's visit history.

**Priority:** `MUST`

------------------------------------------------------------------------

## Sprint 1

### Sprint goal

Create a demonstrable end-to-end foundation where a pilot user can
authenticate, view basic pilot stadium/match information, and create a
simple stadium check-in that is stored and visible to the user.

### Planned Sprint 1 backlog

1.  Account creation and sign-in
2.  Basic user profile
3.  View pilot stadium/match data
4.  Create stadium check-in
5.  View minimal stadium-visit history

The objective is a **small integrated increment**, not feature
completeness. Feedback from the increment should be used to refine the
backlog.

------------------------------------------------------------------------

## GitHub workflow

GitHub is used to support transparency and collaboration rather than
create unnecessary process.

### Issues

Use issues for actionable work. Where relevant, include:

-   clear description,
-   acceptance criteria,
-   MoSCoW label,
-   assignee(s),
-   sprint/milestone,
-   dependencies or blockers.

### Project board

Suggested workflow:

`Backlog → Ready → In Progress → Review → Done`

Work should be kept visible and updated so that the board reflects the
team's actual status.

### Branches and pull requests

During development, implementation work should normally be completed in
small branches and reviewed before being merged.

Example:

``` text
main
 ├── feature/login
 ├── feature/profile
 └── feature/check-in
```

The exact Git strategy may be adjusted during the Design phase. The team
should prefer a simple workflow that supports frequent integration and
shared ownership.

------------------------------------------------------------------------

## Team working principles

Our collaboration is based on:

-   shared goals and collective ownership,
-   open and respectful communication,
-   transparency about progress and blockers,
-   asking for help early,
-   constructive feedback,
-   knowledge sharing,
-   psychological safety,
-   continuous learning and improvement.

Questions and uncertainty are welcome. Mistakes should be treated as
opportunities to learn rather than reasons for blame.

Important decisions should be visible to the team, and difficult work
should not become dependent on only one person.

------------------------------------------------------------------------

## Repository structure

The repository can gradually evolve toward the following structure:

``` text
stadionhopper/
├── README.md
├── docs/
│   ├── discovery/
│   ├── design/
│   └── decisions/
├── src/
├── tests/
└── .github/
```

The structure will evolve as technical decisions are made during later
deliverables.

------------------------------------------------------------------------

## Project phases

The course project is organized around four agile deliveries:

1.  **Discovery** -- product vision, problem understanding,
    stakeholders, personas, use cases, MVP, backlog, prioritization,
    sprint planning, and team agreements.
2.  **Design** -- domain model, architecture, UX/wireframes, Git
    strategy, CI strategy, and test strategy.
3.  **Development** -- working prototype, automated tests, CI pipeline,
    review, and retrospective.
4.  **Release & Reflection** -- MVP release, pilot demonstration,
    metrics, DORA analysis, and reflection.

### Current phase

**Deliverable 1 -- Discovery**

Current focus:

-   [x] Product vision
-   [x] Problem definition
-   [x] Value proposition
-   [x] MVP scope
-   [x] MoSCoW prioritization
-   [x] Stakeholder analysis
-   [x] Proto-personas
-   [x] Core use cases
-   [x] Initial product backlog
-   [x] Sprint 1 plan
-   [x] Team working agreements
-   [ ] Transfer prioritized backlog to GitHub Issues/Project
-   [ ] Validate assumptions with stakeholder/user feedback

------------------------------------------------------------------------

## Success and learning

Possible indicators for later pilot evaluation include:

-   registered users,
-   stadium check-ins,
-   repeat activity / retention,
-   posts and interactions,
-   created events and RSVP participation,
-   activity around pilot clubs,
-   qualitative feedback from supporters and clubs.

These are not treated as guaranteed success criteria at the Discovery
stage. They are potential measures that can help the team evaluate
whether the product creates the intended value.

------------------------------------------------------------------------

## Course context

This repository is developed as part of **IBE205 Agile Methods**.
Stadionhopper is a student project and pilot concept connected to
**Nordmøre og Romsdal Fotballkrets**.

The project is used to practice agile product discovery, prioritization,
iterative development, teamwork, software engineering, testing,
continuous integration/delivery, and evidence-based improvement.

------------------------------------------------------------------------

## Team

**Group:** \[insert group number\]

  Team member   Role / responsibility
  ------------- -----------------------
  \[Name\]      \[Role\]
  \[Name\]      \[Role\]
  \[Name\]      \[Role\]
  \[Name\]      \[Role\]
  \[Name\]      \[Role\]
  \[Name\]      \[Role\]
  \[Name\]      \[Role\]

Roles can evolve during the project. Collective ownership of the product
remains a team responsibility.
