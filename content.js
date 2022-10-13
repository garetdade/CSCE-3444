chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);
	let paragraphs = document.getElementsByTagName("p");
	for(par of paragraphs)
	{
		//par.style['background-color'] = '#00CED1';
		par.style['font-family'] = "Arial";
		par.style['letter-spacing'] = '3px';
		par.style['word-spacing'] = '10.5px';
		par.style['font-variant-ligatures'] = 'none';
	}

	let headers = document.getElementsByTagName("h3");
	for (hea of headers)
	{
		hea.style['font-family'] = "Comic Sans MS";
		hea.style['letter-spacing'] = '3px';
		hea.style['word-spacing'] = '10.5px';
		hea.style['font-variant-ligatures'] = 'none';
	}
}