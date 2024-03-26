// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//     if (tab.url && tab.url.includes("colonist.io/#")) {
//       const queryParameters = tab.url.split("?")[1];
//       const urlParameters = new URLSearchParams(queryParameters);
        
//       console.log(1, urlParameters, queryParameters)
  
//       chrome.tabs.sendMessage(tabId, {
//         type: "new_game",
//         value: urlParameters.get("v"),
//       });
//     }
//   });


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.message === "data_from_content_script") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { message: "data_to_index_html", data: message.data });
        });
    }
});  