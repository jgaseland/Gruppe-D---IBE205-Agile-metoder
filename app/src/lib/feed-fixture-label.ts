export type SharedFixture = {
  home_club?: string | null;
  away_club?: string | null;
  stadium?: string | null;
};

export function sharedFixtureLabel(item: SharedFixture): string | null {
  const home = item.home_club?.trim();
  const away = item.away_club?.trim();
  const stadium = item.stadium?.trim();
  if (!home || !away || !stadium) return null;
  return `${home} – ${away} · ${stadium}`;
}
