chrome.runtime.onMessage.addListener(gotMessage);

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
		"highlighting"
	], function(items) {
		var highlighting = items.highlighting;
		if (highlighting === true) {
			paragraphHighlighting();
		}
	});
}