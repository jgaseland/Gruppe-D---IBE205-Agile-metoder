# Delivery 3 — independent quality review checklist

**Purpose:** Invite actual peer review of the delivered increment before submission. This is a review request, not evidence that anyone has performed a review.

## Review preparation
- Repository: https://github.com/jgaseland/Gruppe-D---IBE205-Agile-metoder
- Live prototype: https://stadionhopper.vercel.app
- CI for the last app-changing commit: https://github.com/jgaseland/Gruppe-D---IBE205-Agile-metoder/actions/runs/39163877077
- Implemented feature PRs: #26 (auth/profile), #27 (check-ins/history), #28 (opt-in feed)
- Existing manual test evidence: [delivery-3-sprint-evidence.md](delivery-3-sprint-evidence.md)

## Suggested peer review tasks
Reviewers should perform and report **only checks they personally carry out**. Record date, test environment, result and any defects in the pull-request review or a linked issue.

| Area | Reviewer task | Evidence to record |
| --- | --- | --- |
| Authentication | Register, log in, log out; inspect error handling | Pass/fail, environment, any issue |
| Check-in | Check in to a seeded match; find visit in profile | Pass/fail, navigation feedback |
| Duplicate handling | Attempt second check-in to same match | Observed message/result |
| Account separation | Use two test accounts; verify personal histories are separated | UI observations; not a substitute for RLS security testing |
| Social feed | Opt in to share a check-in; verify second account can see it | Pass/fail and privacy concerns |
| Logged-out access | Attempt protected actions while signed out | Observed access behavior |
| Quality pipeline | Inspect GitHub Actions steps and unit test scope | CI link and any coverage gaps |
| Documentation | Compare README and D3 evidence against actual behavior | Inaccuracies or missing steps |

## Review questions
1. Which parts of the implemented user flow did you actually test?
2. Did you find defects, confusing interactions, or missing acceptance criteria?
3. Are privacy boundaries and limitations explained accurately?
4. What should be prioritized next, and why?
5. What was **not** tested or reviewed?

## Process integrity
- Request review from actual repository collaborators using GitHub's **Request reviewers** control.
- Do not pre-fill results or submit reviews on behalf of other people.
- A requested review is not a completed review. No response is a lack of recorded GitHub feedback, **not proof of zero work elsewhere**.
- Do not claim a team Sprint Review or Retrospective occurred unless there is evidence of that event.
- Do not merge solely to create review activity. Resolve substantive comments and document why any remaining limitations are accepted.
