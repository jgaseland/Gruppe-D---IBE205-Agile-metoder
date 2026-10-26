export const VISIT_HISTORY_HREF = "/profil#besokshistorikk";

export function checkInFeedback(status: number) {
  return {
    showHistoryLink: status >= 200 && status < 300,
    showLoginLink: status === 401,
  };
}
