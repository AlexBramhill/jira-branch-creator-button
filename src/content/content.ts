import { getHostname } from "../shared/repository/chromeStorageSync";

console.log("Content script loaded!");

chrome.runtime.sendMessage({ msg: "Hello from content script" });

const isOnJiraPage = async () => {
  const hostname = await getHostname();
  const currentPageUrl = new URL(window.location.href);
  console.log("Current page hostname:", currentPageUrl.hostname);
  console.log("Stored hostname:", hostname);
  return hostname && hostname === currentPageUrl.hostname;
};

(async () => {
  if (await isOnJiraPage()) {
    document.body.style.border = "5px solid red";
  }
})();
