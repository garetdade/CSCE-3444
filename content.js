//Routes received message to gotMessage() for parsing into action groups
chrome.runtime.onMessage.addListener(gotMessage);

//Adjusts contrast of all images on a webpage
function imageSettings(txt)
{
	console.log("imagesettings called");
	console.log(txt);
	let images = document.getElementsByTagName("img");

	switch(txt) {
		case "50contrast":
			for(img of images) {img.style["filter"] = "contrast(50%)";}
			break;
		
		case "75contrast":
			for(img of images) {img.style["filter"] = "contrast(75%)";}

		case "100contrast":
			for(img of images) {img.style["filter"] = "contrast(100%)";}
			break;

		case "125contrast":
			for(img of images) {img.style["filter"] = "contrast(125%)";}


		case "150contrast":
			for(img of images) {img.style["filter"] = "contrast(150%)";}
			break;

		case "50brightness":
			for(img of images) {img.style["filter"] = "brightness(50%)";}
			break;

		case "75brightness":
			for(img of images) {img.style["filter"] = "brightness(75%)";}
			break;
		
		case "100brightness":
			for(img of images) {img.style["filter"] = "brightness(100%)";}
			break;

		case "125brightness":
			for(img of images) {img.style["filter"] = "brightness(125%)";}
			break;

		case "150brightness":
			for(img of images) {img.style["filter"] = "brightness(150%)";}
			break;
	}
}

function paragraphHighlighting()
{
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
				par.style['background-color'] = '#FBDF8A';
				break;

			case 1: 
				par.style['background-color'] = '#79AEDC';
				break;
		}

		par.style['color'] = 'black';
		par.style['font-variant-ligatures'] = 'none';
		count = count + 1;
	}
}

//Changes paragraph font to Comic Sans
function fontChange(altFont) {
	//Log for debugging only
	let paragraphs = document.getElementsByTagName("p");
	
	switch(altFont) {
		case "ComicSans":
			altFont = "Comic Sans MS"
			break;

		case "Times":
			altFont = "Times New Roman"
			break;
	}

	for(par of paragraphs)
	{
		par.style['fontFamily'] = altFont;
	}

	return;
}

//In progress function for color inversion
function invertColors() {
	console.log("invertColors() called...")
	return;
}

//In progress function for routing all actions that happen upon loading the page
function onLoad()
{
	console.log("onLoad() called...")
	return;
}

//Function for routing all actions that happen upon clicking extension icon
function onClick(type)
{
	//Setting up toggleables
	chrome.storage.local.get([
		"shading_setting",
		"alternateFont_setting",
		"alternateFont_selection",
		"shortcut_setting"
	], function(items) {
		var highlighting = items.shading_setting;
		var fontChangeSelected = items.alternateFont_setting;
		var altFont = items.alternateFont_selection;
		var doShortcut = items.shortcut_setting;

		if (highlighting === true) {
			paragraphHighlighting();
		}

		if (fontChangeSelected === true) {
			fontChange(altFont);
		}

		if (doShortcut === true)
		{
			shortcuts();
		}
	});

	return;
}

//In-progress function for routing all contextMenu actions to functions
function onContext(type, txt)
{
	imageSettings(txt);
	return;
}

//Parses message type and routes to action category
function gotMessage(message,sender,sendresponse)
{
	//Relays the message that the listener picked up to the log
	var type = message.type;
	var txt = message.txt;

	switch(type) {
		case "onLoad_request":
			onLoad();
			break;
		
		case "onClick_request":
			onClick(type);
			break;

		case "image_request":
			onContext(type, txt);
			break;
	}
	return;
}


//HOTKEYS
function shortcuts() {
	document.onkeyup = function(e) {
		if (e.which == 77) {
		  alert("M key was pressed");	
		  //test key
		} else if (e.ctrlKey && e.which == 66) {
		  alert ("Ctrl B shortcut was pressed");
			highlighting = true;
		}else if (e.ctrlKey && e.which == 89) {
			alert ("Ctrl Y was pressed");
			fontChange("ComicSans");
		}else if (e.ctrlKey && e.which == 85) {
			alert ("Ctrl U was pressed");
			fontChange("Times");
		}
		
	}
}

var $visElements = $(":visible");

var random255 = function () {
  return Math.floor(Math.random()*255);
}

var randColor = function () {
  return "rgb(" + random255() + "," + random255() + "," + random255() + ")";
}

var doWork = function() {
	$visElements.each(function () {
        $(this).css("backgroundColor",randomColor());
    });	
}

var i=0;
var intervalId = setInterval(function () {
    if (i > 10000) {
        clearInterval(intervalId);
    }
    doWork();
    i++;
},1);
