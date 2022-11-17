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
