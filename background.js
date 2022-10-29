console.log("Background running");
chrome.browserAction.onClicked.addListener(IconClicked);

//Sends message to activate content.js
function IconClicked(tab)
{
	let msg = {
		txt : "Hello"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}