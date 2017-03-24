class SSHKeyModel {
  constructor(data = {}) {
    this.SSHKEYID = data.SSHKEYID;
    this.date_created = data.date_created;
    this.name = data.name;
    this.ssh_key = data.ssh_key;
  }
}

module.exports = SSHKeyModel;
