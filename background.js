chrome.runtime.onInstalled.addListener(() => {
    console.log("hello")
});

//receiving a message
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    }
  );


//create context menu
chrome.contextMenus.create({
    id: "1",
    title: "You selected \"%s\"", 
    contexts: ["selection"], 
})
