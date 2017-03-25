/**
 * @class StartupScriptModel
 * @constructor
 * @param data {Object}
 */
class StartupScriptModel {
  constructor(data = {}) {
    this.SCRIPTID = data.SCRIPTID;
    this.date_created = data.date_created;
    this.date_modified = data.date_modified;
    this.name = data.name;
    this.type = data.type;
    this.script = data.script;
  }
}

module.exports = StartupScriptModel;
