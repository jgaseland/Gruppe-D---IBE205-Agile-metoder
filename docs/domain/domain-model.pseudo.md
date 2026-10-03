# Stadionhopper – Domain Model Pseudocode

This file provides a simple technical trace of the domain model. It is intentionally language-neutral.

```text
class User {
    UUID userId
    String name
    String email
    String? profileImageUrl
    DateTime createdAt
}

class Stadium {
    UUID stadiumId
    String name
    String location
    Integer? capacity
}

class Club {
    UUID clubId
    String name
    String city
    String? logoUrl
    UUID? primaryStadiumId
}

class Match {
    UUID matchId
    UUID homeClubId
    UUID awayClubId
    UUID stadiumId
    DateTime startTime
    String status
    String? competition
}

class CheckIn {
    UUID checkInId
    UUID userId
    UUID matchId
    DateTime createdAt
    String? photoUrl
    String? comment
}

class Post {
    UUID postId
    UUID userId
    UUID? checkInId
    String text
    String? imageUrl
    DateTime createdAt
}

class Event {
    UUID eventId
    UUID? organizerClubId
    String title
    String? description
    DateTime startTime
    String location
}

class EventAttendance {
    UUID userId
    UUID eventId
    String status
    DateTime createdAt
}
```

## Example validation rules

```text
Match.homeClubId != Match.awayClubId
CheckIn.userId must reference an existing User
CheckIn.matchId must reference an existing Match
Match.stadiumId must reference an existing Stadium
Post.userId must reference an existing User
EventAttendance.userId must reference an existing User
EventAttendance.eventId must reference an existing Event
```

The exact programming language and persistence technology are intentionally left open for the architecture decision.


## Source-of-truth rule
For a match-based CheckIn, the stadium is resolved through `CheckIn.matchId -> Match.stadiumId`. The CheckIn does not duplicate `stadiumId` in the initial model.
