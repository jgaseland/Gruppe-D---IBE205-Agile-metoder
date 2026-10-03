# Stadionhopper – Domain Model

## Purpose
The domain model translates the product concepts from Discovery into a technical model that the team can share, version and discuss in Git. It focuses on the minimum concepts required for Deliverable 2: User, Stadium, Club, Match, CheckIn, Post and Event.

## Core concepts

### User
Represents a person using Stadionhopper.
Suggested attributes: `userId`, `name`, `email`, `profileImageUrl`, `createdAt`.

Relationships:
- A User can create zero or many CheckIns.
- A User can create zero or many Posts.
- A User can attend zero or many Events.

### Stadium
Represents a football stadium that can host matches and receive check-ins.
Suggested attributes: `stadiumId`, `name`, `location`, `capacity`.

Relationships:
- A Stadium can host zero or many Matches.
- A Stadium can have zero or many CheckIns.
- A Club may be associated with a Stadium.

### Club
Represents a football club.
Suggested attributes: `clubId`, `name`, `city`, `logoUrl`.

Relationships:
- A Club can participate in many Matches.
- A Club can organize zero or many Events.
- A Club may be associated with a Stadium.

### Match
Represents a scheduled football match.
Suggested attributes: `matchId`, `startTime`, `status`, `competition`.

Relationships:
- Each Match has one home Club.
- Each Match has one away Club.
- Each Match is played at one Stadium.
- A Match can have zero or many CheckIns.

### CheckIn
Represents a user's recorded stadium visit connected to a match.
Suggested attributes: `checkInId`, `createdAt`, `photoUrl`, `comment`.

Relationships:
- Each CheckIn belongs to one User.
- Each CheckIn belongs to one Match.
- Each CheckIn occurs at one Stadium.

The Stadium reference is explicit because stadium visits are central to Stadionhopper. In implementation, the stadium can also be derived from the Match; the team should choose one source of truth to avoid inconsistent data.

### Post
Represents content shown in the social feed.
Suggested attributes: `postId`, `text`, `imageUrl`, `createdAt`.

Relationships:
- Each Post is created by one User.
- A Post may reference a CheckIn.

### Event
Represents a supporter or club activity related to local football.
Suggested attributes: `eventId`, `title`, `description`, `startTime`, `location`.

Relationships:
- An Event may be organized by one Club.
- Many Users can attend many Events.

## Relationship overview

```mermaid
classDiagram
    class User {
      +UUID userId
      +String name
      +String email
      +String profileImageUrl
      +DateTime createdAt
    }
    class Stadium {
      +UUID stadiumId
      +String name
      +String location
      +Int capacity
    }
    class Club {
      +UUID clubId
      +String name
      +String city
      +String logoUrl
    }
    class Match {
      +UUID matchId
      +DateTime startTime
      +String status
      +String competition
    }
    class CheckIn {
      +UUID checkInId
      +DateTime createdAt
      +String photoUrl
      +String comment
    }
    class Post {
      +UUID postId
      +String text
      +String imageUrl
      +DateTime createdAt
    }
    class Event {
      +UUID eventId
      +String title
      +String description
      +DateTime startTime
      +String location
    }

    User "1" --> "0..*" CheckIn : creates
    User "1" --> "0..*" Post : creates
    User "0..*" --> "0..*" Event : attends
    Stadium "1" --> "0..*" Match : hosts
    Stadium "1" --> "0..*" CheckIn : location
    Club "0..1" --> "0..1" Stadium : associated with
    Club "1" --> "0..*" Match : home club
    Club "1" --> "0..*" Match : away club
    Club "1" --> "0..*" Event : organizes
    Match "1" --> "0..*" CheckIn : has
    Post "0..*" --> "0..1" CheckIn : references
```

## Connection to the UX and backlog
The model supports the main Sprint 1 flow:

`User -> Match -> Stadium -> CheckIn -> Visit History`

A user signs in, discovers a Match, sees the Stadium, creates a CheckIn and can later retrieve that CheckIn as part of visit history. Post and Event support the social feed and event interfaces required in the UX work.

## Modelling decisions
1. **CheckIn is a separate entity.** A stadium visit has its own timestamp and optional photo/comment and must be retrievable later.
2. **Match links two clubs with different roles.** Home club and away club should be represented as separate role-based relationships.
3. **Post is separate from CheckIn.** Not every check-in must become a social post, and future posts may exist without a check-in.
4. **Event is separate from Match.** A supporter meetup or club activity is not necessarily a football match.
5. **User–Event is many-to-many.** A user can join several events and an event can have several attendees.
6. **The model stays deliberately small.** Followers, notifications, badges, tickets and live scores are not modelled as core entities at this stage because they are not necessary for the minimum Deliverable 2 domain model.

## Assumptions to confirm as a team
- Whether a Club can be associated with more than one Stadium.
- Whether a CheckIn should store `stadiumId` directly or derive the stadium from `matchId`.
- Whether Events can be created by ordinary Users as well as Clubs.
- Whether Posts can exist independently of CheckIns.
- Whether Match status/competition should be enums or simple text in the first implementation.

These points should be resolved through a GitHub Issue or Pull Request so the final model represents a team decision rather than an individual assumption.
