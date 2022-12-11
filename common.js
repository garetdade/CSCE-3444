var core = {
  "start": function () {
    core.load();
  },
  "install": function () {
    core.load();
  },
  "load": function () {
    app.button.icon(null, config.magnifier.state);
  },
  "reset": function (flag) {
    config.magnifier.state = "OFF";
    /*  */
    if (config.magnifier.timeout) clearTimeout(config.magnifier.timeout);
    config.magnifier.timeout = setTimeout(function () {
      app.tab.query.active(function (tab) {
        if (tab) {
          app.button.icon(tab.id, config.magnifier.state);
          if (flag) app.page.send("reset", null, tab.id, null); 
        }
      });
    }, 100);
  },
  "capture": function () {
    app.tab.query.active(function (tab) {
      if (tab) {            
        if (tab.url) {
          app.tab.inject.js({"target": {"tabId": tab.id}, "files": ["/data/content_script/inject.js"]}, function () {
            app.tab.inject.css({"target": {"tabId": tab.id}, "files": ["/data/content_script/inject.css"]}, function () {
              config.magnifier.state = config.magnifier.state === "ON" ? "OFF" : "ON";
              /*  */                  
              if (config.magnifier.state === "ON") {
                app.tab.capture(null, {"format": "jpeg", "quality": 100}, function (screenshot) {
                  var tmp = chrome.runtime.lastError;
                  /*  */
                  app.button.icon(tab.id, config.magnifier.state);
                  app.page.send("screenshot", {
                    "src": screenshot,
                    "size": config.magnifier.size,
                    "zoom": config.magnifier.zoom,
                    "state": config.magnifier.state
                  }, tab.id, null);
                });
              } else {
                core.reset(true);
              }
            });
          });
        }
      }
    });
  }
};

app.page.receive("reset", function () {core.reset(false)});

app.options.receive("get", function (pref) {
  app.options.send("set", {
    "pref": pref, 
    "value": config.get(pref)
  });
});

app.options.receive("changed", function (o) {
  config.set(o.pref, o.value);
  /*  */
  app.options.send("set", {
    "pref": o.pref, 
    "value": config.get(o.pref)
  });
});

app.button.on.clicked(core.capture);
app.hotkey.on.pressed(core.capture);
app.tab.on.updated(function () {core.reset(false)});
app.tab.on.activated(function () {core.reset(true)});

app.on.startup(core.start);
app.on.installed(core.install);
