interface StorageData {
  savedHostname: string;
}

export const storageKeys = {
  savedHostname: "savedHostname",
} as const satisfies { [K in keyof StorageData]: K };
