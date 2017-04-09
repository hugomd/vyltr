/**
 * @class BackupModel
 * @constructor
 * @param data {Object}
 */
class BackupModel {
  constructor(data = {}) {
    this.BACKUPID = data.BACKUPID;
    this.date_created = data.date_created;
    this.description = data.description;
    this.size = data.size;
    this.status = data.status;
  }
}

module.exports = BackupModel;
