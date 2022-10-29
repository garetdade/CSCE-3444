console.log("Background running...");
chrome.browserAction.onClicked.addListener(IconClicked);

//Sends message to activate content.js
function IconClicked(tab)
{
	let msg = {
		txt : "background.js executed... message sent"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}