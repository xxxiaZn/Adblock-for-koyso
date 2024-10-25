chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("aclib.js") || details.url.includes("abcd.js")) {
      return {cancel: true};
    }
  },
  {urls: ["*://*.koyso.com/*"]},
  ["blocking"]
);
