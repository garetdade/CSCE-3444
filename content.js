chrome.runtime.onMessage.addListener(gotMessage);

function paragraphHighlighting()
{
	//Log for debugging only
	console.log("paragraphHighlighting() initiated...")

	//Takes all "p" HTML elements and stores them in var paragraphs
	let paragraphs = document.getElementsByTagName("p");
	let count = 0;

	//Loops through all p elements
	for(par of paragraphs)
	{
		//Odd-even check to alternate paragraph shading
		odd = count % 2;
		switch(odd) {
			case 0:
				par.style['background-color'] = 'AntiqueWhite';
				break;

			case 1: 
				par.style['background-color'] = 'Beige';
				break;
		}

		par.style['color'] = 'black';
		par.style['font-variant-ligatures'] = 'none';
		count = count + 1;
	}
}

function comicSansChange() {
	//Log for debugging only
	console.log("comicSansChange() initiated...");
	let paragraphs = document.getElementsByTagName("p");
	
	for(par of paragraphs)
	{
		par.style['fontFamily'] = "Comic Sans MS";
	}
}

function tts(text) {
	chrome.tts.speak("Hello, world.");
}

function gotMessage(message,sender,sendresponse)
{
	//Relays the message that the listener picked up to the log
	console.log("message received at content.js");

	
	//Setting up toggleables
	chrome.storage.local.get([
		"highlighting",
		"useComicSans"
	], function(items) {
		var highlighting = items.highlighting;
		var comicSansSelected = items.useComicSans;

		if (highlighting === true) {
			paragraphHighlighting();
		}

		if (comicSansSelected === true) {
			comicSansChange();
		}
	});
	
}