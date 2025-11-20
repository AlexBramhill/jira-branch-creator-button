export const getBaseUrlFromHostname = (hostname: string): URL => {
  return new URL(`https://${hostname}/`);
};
