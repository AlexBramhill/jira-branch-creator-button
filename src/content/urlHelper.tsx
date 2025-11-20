export const removeWwwPrefix = (hostname: string): string => {
  return hostname.replace(/^www\./, "");
};
