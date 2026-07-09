/** App branding — edit these values to match your deployment. */
export const APP_NAME = "Resume Builder";

export const APP_TAGLINE = "Professional resume builderrrrr";

export const APP_DESCRIPTION =
  "Create, customize, and export professional resumes with real-time preview and design controls.";

export function pageTitle(suffix?: string) {
  if (suffix) return `${suffix} — ${APP_NAME}`;
  return `${APP_NAME} — ${APP_TAGLINE}`;
}
