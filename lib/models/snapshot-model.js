/**
 * @class SnapshotModel
 * @constructor
 * @param data {Object}
 */
class SnapshotModel {
  constructor(data = {}) {
    this.SNAPSHOTID = data.SNAPSHOTID;
    this.date_created = data.date_created;
    this.description = data.description;
    this.size = data.size;
    this.status = data.status;
  }
}

module.exports = SnapshotModel;
