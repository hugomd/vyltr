/**
 * @class DNSRecordModel
 * @constructor
 * @param data {Object}
 */
class DNSRecordModel {
  constructor(data = {}) {
    this.type = data.type;
    this.name = data.name;
    this.data = data.data;
    this.RECORDID = data.RECORDID;
    this.ttl = data.ttl;
  }
}

module.exports = DNSRecordModel;
