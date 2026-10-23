import { describe, expect, it } from "vitest";
import { publicFeedItems } from "./feed-public-projection";

describe("feed response privacy", () => {
  it("returns only the fields the activity feed needs", () => {
    expect(publicFeedItems([{
      id: "post-1", text: "Sjekket inn på kamp", created_at: "2026-10-23T10:00:00Z",
      user_id: "private-user-id", email: "private@example.invalid", profile: { name: "Private" },
    }])).toEqual([{
      id: "post-1", text: "Sjekket inn på kamp", created_at: "2026-10-23T10:00:00Z",
    }]);
  });
  it("preserves an empty feed", () => {
    expect(publicFeedItems([])).toEqual([]);
  });
});
