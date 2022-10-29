console.log("Background running...");

//Creates chrome.contextMenu object
chrome.contextMenus.create({
    "title": "Speak selected text",
    "contexts": ["selection"],
    "id": "myid"
})

//Acts when context menu entry is clicked
chrome.contextMenus.onClicked.addListener((info, tab) => {
	var text = info.selectionText;

	let msg = {
		type: "tts_request",
		txt: text
	}
	chrome.tts.speak(text);
});

//Acts when extension icon is clicked
chrome.browserAction.onClicked.addListener(IconClicked);

//Sends message to activate content.js
function IconClicked(tab)
{
	let msg = {
		type: "highlight_request",
		txt: "background.js executed... message sent"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}