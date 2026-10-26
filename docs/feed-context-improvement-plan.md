# Feed context improvement — implementation and privacy plan

This change tracks Thomas's second suggestion in the independent quality review on PR #30: show more useful match or stadium information alongside a voluntarily shared check-in.

## Current behavior
The feed currently returns `posts.id`, `user_id`, `text` and `created_at`. The displayed text is deliberately generic: "Supporter · Sjekket inn på kamp". Personal check-in history is private under Supabase RLS.

## Proposed acceptance criteria
- A user who explicitly shares a check-in sees the corresponding **match title** and **stadium name** in the authenticated feed.
- A check-in that has **not** been shared never appears in the feed.
- The feed does not expose account email addresses, private profiles, or other check-ins.
- Logged-out users cannot access the feed.
- Duplicate shares remain blocked.
- The UI handles missing or deleted match reference data gracefully.
- Tests verify that shared match metadata is displayed while private check-in records remain inaccessible.

## Design constraint / implementation decision pending
Do **not** simply join `posts` to `check_ins` in a client query: the `check_ins` table is restricted to each owner by RLS, so cross-user joins may fail. Do **not** weaken that policy or use a service-role key in the browser.

A suitable approach is a narrowly scoped SQL function (or another audited server-side projection) that returns only opted-in posts with their public fixture labels, checks `auth.uid()`, and is explicitly reviewed for RLS and information leakage. The feed endpoint can then consume that limited result. Review and test the migration before deployment.

## Review questions
1. Is sharing a match title and stadium name sufficiently explained in the opt-in flow?
2. Should the match date also be shown, or is that unnecessary?
3. What is the smallest safe server-side projection for the feed?
4. Which two-account tests demonstrate the privacy boundary?

This is a **design proposal**, not an implemented feed feature. No production schema changes are made by this PR.
