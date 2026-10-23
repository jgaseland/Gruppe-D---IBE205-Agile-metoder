# Feed security test matrix

This is a test plan for Issue #34, not a claim that the tests have passed.

| Scenario | Expected result | Evidence to record |
| --- | --- | --- |
| Account A checks in but does not share | Account B cannot see that visit in feed | Screenshots of B's feed and A's private history |
| Account A opts in to sharing | Account B sees only the shared match/stadium labels | Screenshots and API response with personal fields redacted |
| Account B requests A's private history | Request denied or returns only B's records | HTTP status and sanitized response |
| Logged-out user requests feed | HTTP 401 | HTTP status |
| Account A shares same check-in twice | Second share rejected | HTTP 409 |
| Account A shares a check-in belonging to B | Rejected by RLS | HTTP 403 or equivalent |
| Shared fixture has missing reference data | UI shows safe fallback, no crash | Screenshot |
| Client inspects feed JSON | No emails, profile details or unshared check-ins | Redacted JSON field list |

## Architecture gate
The current authenticated feed lists opted-in posts with generic text. Enriching posts with match labels across accounts must not relax owner-only RLS on `check_ins`. Any privileged database projection needs separate review of authorization, function privileges, search path, grants and information exposure before use. Never put a Supabase service-role key in client code.

## Release gate
- [ ] Database change reviewed
- [ ] Cross-account privacy tests executed and recorded
- [ ] New automated tests pass
- [ ] Thomas has had the opportunity to review
- [ ] Production migration and rollback plan approved

No test boxes above are checked. No schema change is deployed by this documentation.
