/**
 * @class APIKeyModel
 * @constructor
 * @param data {Object}
 */
class APIKeyModel {
  constructor(data = {}) {
    this.acls = data.acls;
    this.email = data.email;
    this.name = data.name;
  }
}

module.exports = APIKeyModel;
