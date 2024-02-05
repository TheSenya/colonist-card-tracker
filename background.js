chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("colonist.io/#")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
        
      console.log(1, urlParameters, queryParameters)
  
      chrome.tabs.sendMessage(tabId, {
        type: "new_game",
        value: urlParameters.get("v"),
      });
    }
  });


  