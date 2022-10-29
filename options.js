// Saves options to chrome.storage
function save_options() {
    var wantsHighlighting = document.getElementById('phi').checked;
    var comicSansSelected = document.getElementById('comicSansSelect').checked;
    var readingSpeed = document.getElementById('readingspeed').value;

    console.log(readingSpeed);
    chrome.storage.local.set({
      highlighting: wantsHighlighting,
      useComicSans: comicSansSelected,
      readingSpeed_setting: readingSpeed
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
      highlighting: true,
      useComicSans: false,
      readingSpeed_setting: 1.0
    }, function(items) {
      document.getElementById('phi').checked = items.highlighting;
      document.getElementById('comicSansSelect').checked = items.useComicSans;
      document.getElementById('readingspeed').value = items.readingSpeed_setting;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);