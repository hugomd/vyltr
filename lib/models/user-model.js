class UserModel {
  constructor(data = {}) {
    this.USERID = data.USERID;
    this.name = data.name;
    this.email = data.email;
    this.api_enabled = data.api_enabled;
    this.acls = data.acls;
  }
}

module.exports = UserModel;
