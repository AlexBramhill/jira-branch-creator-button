import { getHostname } from "../shared/repository/chromeStorageSync";
import { allSelectorStrategies } from "./ticket-selector-strategies/allStrategies";
import { processPage } from "./ticket-selector/ticketSelector";
import { removeWwwPrefix } from "./urlHelper";

console.log("Content script loaded!");

chrome.runtime.sendMessage({ msg: "Hello from content script" });

const isOnJiraPage = async () => {
  const hostname = await getHostname();
  const currentPageUrl = new URL(window.location.href);

  const isOnStoredHostnamePage =
    hostname &&
    removeWwwPrefix(hostname) === removeWwwPrefix(currentPageUrl.hostname);

  return isOnStoredHostnamePage;
};

(async () => {
  if (await isOnJiraPage()) {
    console.log("On Jira page, applying border style.");
    document.body.style.border = "5px solid red";
    processPage(allSelectorStrategies);
  }
})();
