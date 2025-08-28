import { format, parseISO } from "date-fns";

export function formatDate(isoDate) {
  if (!isoDate) return "";
  const date = typeof isoDate === "string" ? parseISO(isoDate) : isoDate;
  return format(date, "d MMMM yyyy"); // e.g., 19 August 2024
}
