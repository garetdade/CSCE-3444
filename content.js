chrome.runtime.onMessage.addListener(gotMessage);

function comicSansChange() {
	//Log for debugging only
	console.log("comicSansChange() initiated...");

	let paragraphs = document.getElementsByTagName("p");
	
	for(par of paragraphs)
	{
		par.style['fontFamily'] = "Comic Sans MS";
	}
}

function paragraphHighlighting()
{
	//Log for debugging only
	console.log("Paragraph Highlighting Initiated...")

	//Takes all "p" HTML elements and stores them in var paragraphs
	let paragraphs = document.getElementsByTagName("p");
	let count = 0;

	//Loops through all p elements
	for(par of paragraphs)
	{
		//Log for debugging only
		console.log(count);

		//Odd-even check to alternate paragraph shading
		if (count % 2 == 0)
		{
			par.style['background-color'] = 'AntiqueWhite';
		}

		else 
		{
			par.style['background-color'] = 'Beige';
		}

		par.style['color'] = 'black';
		par.style['font-variant-ligatures'] = 'none';
		count = count + 1;
	}
}

function gotMessage(message,sender,sendresponse)
{
	//Relays the message that the listener picked up to the log
	console.log(message.txt);

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

		console.log(comicSansSelected);
		if (comicSansSelected === true) {
			comicSansChange();
		}
	});
}