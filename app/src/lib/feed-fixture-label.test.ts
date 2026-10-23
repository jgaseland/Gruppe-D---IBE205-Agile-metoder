import { describe, expect, it } from "vitest";
import { sharedFixtureLabel } from "./feed-fixture-label";

describe("opt-in feed fixture labels", () => {
  it("formats match and stadium names", () => {
    expect(sharedFixtureLabel({ home_club: "Viking", away_club: "Brann", stadium: "SR-Bank Arena" }))
      .toBe("Viking – Brann · SR-Bank Arena");
  });
  it("does not invent missing match or stadium details", () => {
    expect(sharedFixtureLabel({ home_club: "Viking", away_club: "Brann" })).toBeNull();
    expect(sharedFixtureLabel({ home_club: " ", away_club: "Brann", stadium: "Arena" })).toBeNull();
  });
  it("does not need user or profile information", () => {
    expect(sharedFixtureLabel({ home_club: "A", away_club: "B", stadium: "C" })).toBe("A – B · C");
  });
});
