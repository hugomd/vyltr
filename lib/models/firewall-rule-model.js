/**
 * @class FirewallRuleModel
 * @constructor
 * @param data {Object}
 */
class FirewallRuleModel {
  constructor(data = {}) {
    this.rulenumber = data.rulenumber;
    this.action = data.action;
    this.protocol = data.protocol;
    this.port = data.port;
    this.subnet = data.subnet;
    this.subnet_size = data.subnet_size;
  }
}

module.exports = FirewallRuleModel;
