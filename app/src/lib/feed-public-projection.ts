export type FeedRow = {
  id: string;
  text: string;
  created_at: string;
  user_id?: unknown;
  email?: unknown;
  profile?: unknown;
};

export function publicFeedItems(rows: FeedRow[]) {
  return rows.map(({ id, text, created_at }) => ({ id, text, created_at }));
}
