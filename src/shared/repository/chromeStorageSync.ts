import { storageKeys } from "./storageKeys";

export const saveHostname = async (hostname: string): Promise<void> => {
  await chrome.storage.sync.set({
    [storageKeys.savedHostname]: hostname,
  });
};

export const getHostname = async (): Promise<string | null> => {
  const result = await chrome.storage.sync.get([storageKeys.savedHostname]);
  return result[storageKeys.savedHostname] || null;
};
