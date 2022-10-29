console.log("Background running...");

//Creates chrome.contextMenu object
chrome.contextMenus.create({
    "title": "Speak selected text",
    "contexts": ["selection"],
    "id": "speak"
})

chrome.contextMenus.create({
	"title": "Image settings",
	"contexts": ["image"],
	"id": "imagesettings"
})

chrome.contextMenus.create({
	"title": "Adjust contrast",
	"contexts": ["image"],
	"id": "imagecont",
	"parentId": "imagesettings"
})

chrome.contextMenus.create({
	"title": "150%",
	"contexts": ["image"],
	"id": "150contrast",
	"parentId": "imagecont"
})

chrome.contextMenus.create({
	"title": "100%",
	"contexts": ["image"],
	"id": "100contrast",
	"parentId": "imagecont"
})

chrome.contextMenus.create({
	"title": "50%",
	"contexts": ["image"],
	"id": "50contrast",
	"parentId": "imagecont"
})

//Acts when context menu entry is clicked
chrome.contextMenus.onClicked.addListener((info, tab) => {
	var text = info.selectionText;

	if(info.parentMenuItemId === "imagecont") {
		let msg = {
			type: "contrast_request",
			txt: info.menuItemId
		}
		chrome.tabs.sendMessage(tab.id, msg)
	}

	else {
		chrome.storage.local.get({
			"readingSpeed_setting" : 1.0
		}, function(items) {
			var readingSpeed = items.readingSpeed_setting;
			readingSpeed = parseFloat(readingSpeed);
			console.log("Reading speed:");
			console.log(readingSpeed);
			chrome.tts.speak(text, {"rate" : readingSpeed});
		});
	}
	
});

//Listens for tab load
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
		let msg = {
			type: "onLoad_request",
			txt: ""
		}

		chrome.tabs.sendMessage(tab.id, msg)
	}
  })

//Acts when extension icon is clicked
chrome.browserAction.onClicked.addListener(IconClicked);

//Sends message to activate content.js
function IconClicked(tab)
{
	let msg = {
		type: "onClick_request",
		txt: ""
	}
	chrome.tabs.sendMessage(tab.id,msg);
}