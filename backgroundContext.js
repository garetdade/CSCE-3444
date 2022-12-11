//Creates chrome.contextMenu object
chrome.contextMenus.create({
    "title": "Speak selected text",
    "contexts": ["selection"],
    "id": "speak"
})

//For magnifying selected text
chrome.contextMenus.create({
    "title": "Magnify Text",
    "contexts": ["selection"],
    "id": "textMagnifier"
})

//-----------------------------------

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
	"title": "125%",
	"contexts": ["image"],
	"id": "125contrast",
	"parentId": "imagecont"
})

chrome.contextMenus.create({
	"title": "100%",
	"contexts": ["image"],
	"id": "100contrast",
	"parentId": "imagecont"
})

chrome.contextMenus.create({
	"title": "75%",
	"contexts": ["image"],
	"id": "75contrast",
	"parentId": "imagecont"
})

chrome.contextMenus.create({
	"title": "50%",
	"contexts": ["image"],
	"id": "50contrast",
	"parentId": "imagecont"
})

// -----------------------------------

chrome.contextMenus.create({
	"title": "Adjust brightness",
	"contexts": ["image"],
	"id": "imagebright",
	"parentId": "imagesettings"
})

chrome.contextMenus.create({
	"title": "150%",
	"contexts": ["image"],
	"id": "150brightness",
	"parentId": "imagebright"
})

chrome.contextMenus.create({
	"title": "125%",
	"contexts": ["image"],
	"id": "125brightness",
	"parentId": "imagebright"
})

chrome.contextMenus.create({
	"title": "100%",
	"contexts": ["image"],
	"id": "100brightness",
	"parentId": "imagebright"
})

chrome.contextMenus.create({
	"title": "75%",
	"contexts": ["image"],
	"id": "75brightness",
	"parentId": "imagebright"
})

chrome.contextMenus.create({
	"title": "50%",
	"contexts": ["image"],
	"id": "50brightness",
	"parentId": "imagebright"
})