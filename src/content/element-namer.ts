const UNIQUE_GUID_ELEMENT_PREFIX = crypto.randomUUID();
export const ELEMENT_PREFIX = `jcb-${UNIQUE_GUID_ELEMENT_PREFIX}`;

export const createElementName = (string: string): string => {
  return `${ELEMENT_PREFIX}-${string.replace(/\s+/g, "-")}`;
};
