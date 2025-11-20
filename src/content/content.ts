import { getUrlFragment } from "../shared/repository/chromeStorageSync";

console.log("Content script loaded!");

chrome.runtime.sendMessage({ msg: "Hello from content script" });

const urlPattern = await getUrlFragment();
if (urlPattern && new RegExp(urlPattern).test(window.location.href)) {
  document.body.style.border = "5px solid red";
}
