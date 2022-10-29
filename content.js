chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);
	let paragraphs = document.getElementsByTagName("p");
	let count = 0;
	for(par of paragraphs)
	{
		console.log(count);
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

	let headers3 = document.getElementsByTagName("h3");
	for(hea of headers3)
	{
		hea.style['background-color'] = 'AntiqueWhite';
		hea.style['color'] = 'black';
		hea.style['font-variant-ligatures'] = 'none';
	}
}