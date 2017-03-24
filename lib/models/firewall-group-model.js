class FirewallGroupModel {
  constructor(data = {}) {
    this.FIREWALLGROUPID = data.FIREWALLGROUPID;
    this.description = data.description;
    this.data_created = data.data_created;
    this.data_modified = data.data_modified;
    this.instance_count = data.instance_count;
    this.rule_count = data.rule_count;
    this.max_rule_count = data.max_rule_count;
  }
}

module.exports = FirewallGroupModel;
