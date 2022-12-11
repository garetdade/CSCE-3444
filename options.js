// Saves options to chrome.storage
function save_options() {
    var shadingToggle = document.getElementById('paragraphShading_checkbox').checked;
    var alternateFontToggle = document.getElementById('altFont_checkbox').checked;
    var alternateFont = document.getElementById('fonts').value;
    var shortcutToggle = document.getElementById('shortCut_checkbox').value;
    var readingSpeed = document.getElementById('readingSpeed_range').value;

    console.log(readingSpeed);
    chrome.storage.local.set({
      shading_setting: shadingToggle,
      readingSpeed_setting: readingSpeed,
      alternateFont_setting: alternateFontToggle,
      alternateFont_selection: alternateFont,
      shortcut_setting: shortcutToggle
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
}
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    shading_setting: true,
    comicSans_setting: false,
    readingSpeed_setting: 1.0,
    alternateFont_setting: false,
    alternateFont_selection: "Arial",
    shortcut_setting: false
  }, function(items) {
    document.getElementById('paragraphShading_checkbox').checked = items.shading_setting;
    document.getElementById('readingSpeed_range').value = items.readingSpeed_setting;
    document.getElementById('altFont_checkbox').checked = items.alternateFont_setting;
    document.getElementById('fonts').value = items.alternateFont_selection;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

//Magnifying Glass Code
var background = (function () {
  var tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in tmp) {
      if (tmp[id] && (typeof tmp[id] === "function")) {
        if (request.path === "background-to-options") {
          if (request.method === id) tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {tmp[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": "options-to-background", "method": id, "data": data})}
  }
})();

var load = function () {
  var prefs = [...document.querySelectorAll("*[data-pref]")];
  prefs.forEach(function (elem) {
    var pref = elem.getAttribute("data-pref");
    window[pref] = connect(elem, pref);
  });
  /*  */
  window.removeEventListener("load", load, false);
};

var connect = function (elem, pref) {
  var att = "value";
  if (elem) {
    if (elem.type === "checkbox") att = "checked";
    if (elem.localName === "select") att = "value";
    if (elem.localName === "number") att = "value";
    /*  */
    var pref = elem.getAttribute("data-pref");
    /*  */
    background.send("get", pref);
    elem.addEventListener("change", function () {
      background.send("changed", {
        "pref": pref, 
        "value": this[att]
      });
    });
  }
  /*  */
  return {
    get value () {return elem[att]},
    set value (val) {
      if (elem.type === "file") return;
      elem[att] = val;
    }
  }
};

background.receive("set", function (e) {  
  if (window[e.pref]) {
    window[e.pref].value = e.value;
  }
});

window.addEventListener("load", load, false);