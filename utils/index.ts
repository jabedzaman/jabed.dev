export const URL: String =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const isDev: boolean =
  process.env.NODE_ENV === "development" ? true : false;
