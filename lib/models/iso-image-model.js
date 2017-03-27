/**
 * @class ISOImageModel
 * @constructor
 * @param data {Object}
 */
class ISOImageModel {
  constructor(data = {}) {
    this.ISOID = data.ISOID;
    this.date_created = data.date_created;
    this.filename = data.filename;
    this.size = data.size;
    this.md5sum = data.md5sum;
    this.status = data.status;
  }
}

module.exports = ISOImageModel;
