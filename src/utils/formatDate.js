import { format, parseISO } from "date-fns";

export function formatDate(isoDate) {
  if (!isoDate) return "";
  const date = typeof isoDate === "string" ? parseISO(isoDate) : isoDate;
  return format(date, "d MMMM yyyy");
}

export function getDayOnly(isoDate) {
  if (!isoDate) return "";
  const date = typeof isoDate === "string" ? parseISO(isoDate) : isoDate;
  return format(date, "do");
}
