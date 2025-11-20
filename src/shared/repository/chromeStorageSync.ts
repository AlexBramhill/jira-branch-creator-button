export const saveUrlFragment = async (urlFragment: string): Promise<void> => {
  await chrome.storage.sync.set({ savedUrlFragment: urlFragment });
};

export const getUrlFragment = async (): Promise<string | null> => {
  const result = await chrome.storage.sync.get(["savedUrlFragment"]);
  return result.savedUrlFragment || null;
};
