chrome.runtime.onInstalled.addListener(() => {
    console.log("hello")

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
        id: "wikipedia",
        title: "Search for: \"%s\" on Wikipedia", 
        contexts: ["selection"], 
    })
});

//listener for context menu
chrome.contextMenus.onClicked.addListener(function(info, tab){
    //the URL that will be added to based on the selection
    baseURL = "http://en.wikipedia.org/wiki/";
    var newURL = baseURL + info.selectionText;
    //create the new URL in the user's browser
    chrome.tabs.create({ url: newURL });
})
