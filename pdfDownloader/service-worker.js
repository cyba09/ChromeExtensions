
chrome.runtime.onMessage.addListener(notify);

function notify(message) {
  chrome.downloads.download({
    url: message.url
  });
  
}