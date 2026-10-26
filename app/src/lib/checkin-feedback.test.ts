import { describe, expect, it } from "vitest";
import { checkInFeedback, VISIT_HISTORY_HREF } from "./checkin-feedback";

describe("check-in feedback links", () => {
  it("links to history after a successful check-in", () => {
    expect(checkInFeedback(201)).toEqual({ showHistoryLink: true, showLoginLink: false });
    expect(VISIT_HISTORY_HREF).toBe("/profil#besokshistorikk");
  });
  it("does not show history after a duplicate check-in", () => {
    expect(checkInFeedback(409)).toEqual({ showHistoryLink: false, showLoginLink: false });
  });
  it("prompts for login without falsely showing success", () => {
    expect(checkInFeedback(401)).toEqual({ showHistoryLink: false, showLoginLink: true });
  });
  it("does not show success links for other server failures", () => {
    expect(checkInFeedback(502).showHistoryLink).toBe(false);
  });
});
