export const URL: String =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const isDev: boolean =
  process.env.NODE_ENV === "development" ? true : false;
