/**
 * @class BlockStorageModel
 * @constructor
 * @param data {Object}
 */
class BlockStorageModel {
  constructor(data = {}) {
    this.SUBID = data.SUBID;
    this.date_created = data.date_created;
    this.cost_per_month = data.cost_per_month;
    this.status = data.status;
    this.size_gb = data.size_gb;
    this.DCID = data.DCID;
    this.attached_to_SUBID = data.attached_to_SUBID;
    this.label = data.label;
  }
}

module.exports = BlockStorageModel;
