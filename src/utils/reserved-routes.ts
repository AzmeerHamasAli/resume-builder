/** First path segments used by app routes — not valid public resume usernames. */
const RESERVED_PUBLIC_PATH_SEGMENTS = new Set([
  "api",
  "auth",
  "builder",
  "dashboard",
  "internal",
  "mcp",
  "printer",
  "uploads",
]);

export function isReservedPublicUsername(username: string): boolean {
  return RESERVED_PUBLIC_PATH_SEGMENTS.has(username.toLowerCase());
}
