// Saves options to chrome.storage
function save_options() {
    var shadingToggle = document.getElementById('paragraphShading_checkbox').checked;
    var comicSansToggle = document.getElementById('comicSans_checkbox').checked;
    var readingSpeed = document.getElementById('readingSpeed_range').value;
    var invertToggle = document.getElementById('colorInvert_checkbox').checked;

    console.log(readingSpeed);
    chrome.storage.local.set({
      shading_setting: shadingToggle,
      comicSans_setting: comicSansToggle,
      readingSpeed_setting: readingSpeed,
      invertColors_setting: invertToggle
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
    invertColors_setting: false
  }, function(items) {
    document.getElementById('paragraphShading_checkbox').checked = items.shading_setting;
    document.getElementById('comicSans_checkbox').checked = items.comicSans_setting;
    document.getElementById('readingSpeed_range').value = items.readingSpeed_setting;
    document.getElementById('colorInvert_checkbox').checked = items.invertColors_setting;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);