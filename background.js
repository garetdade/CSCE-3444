console.log("Background running...");

//Acts when context menu entry is clicked
chrome.contextMenus.onClicked.addListener((info, tab) => {
	var text = info.selectionText;

	if(info.parentMenuItemId === "imagecont" || info.parentMenuItemId === "imagebright") {
		let msg = {
			type: "image_request",
			txt: info.menuItemId
		}
		chrome.tabs.sendMessage(tab.id, msg)
	}

	else {
		chrome.storage.local.get({
			"readingSpeed_setting" : 1.0,
			"dialect" : "en-us"
		}, function(items) {
			var readingSpeed = items.readingSpeed_setting;
			var dialect = items.dialect;
			readingSpeed = parseFloat(readingSpeed);
			console.log("Reading speed:");
			console.log(readingSpeed);

			chrome.tts.speak(text, {"rate" : readingSpeed, "voiceName" : "Google US English"});
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

	chrome.tts.getVoices(
		function(voices) {
		  for (var i = 0; i < voices.length; i++) {
			console.log('Voice ' + i + ':');
			console.log('  name: ' + voices[i].voiceName);
			console.log('  lang: ' + voices[i].lang);
			console.log('  extension id: ' + voices[i].extensionId);
			console.log('  event types: ' + voices[i].eventTypes);
		  }
		}
	);

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

