/**
 * @class ApplicationModel
 * @constructor
 * @param data {Object}
 */
class ApplicationModel {
  constructor(data = {}) {
    this.APPID = data.APPID;
    this.name = data.name;
    this.short_name = data.short_name;
    this.deploy_name = data.deploy_name;
    this.surcharge = data.surcharge;
  }
}

module.exports = ApplicationModel;
