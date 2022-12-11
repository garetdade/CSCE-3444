var config = {};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};

config.magnifier = {
  "timeout": null,
  set size (val) {app.storage.write("size", val)},
  set zoom (val) {app.storage.write("zoom", val)},
  set state (val) {app.storage.write("state", val)},
  get zoom () {return app.storage.read("zoom") !== undefined ? app.storage.read("zoom") : 2},
  get size () {return app.storage.read("size") !== undefined ? app.storage.read("size") : 150},
  get state () {return app.storage.read("state") !== undefined ? app.storage.read("state") : "OFF"}
};

config.get = function (name) {
  return name.split('.').reduce(function (p, c) {return p[c]}, config);
};

config.set = function (name, value) {
  function set(name, value, scope) {
    name = name.split('.');
    name.length > 1 ? set.call((scope || this)[name.shift()], name.join('.'), value) : this[name[0]] = value;
  }
  /*  */
  set(name, value, config);
};