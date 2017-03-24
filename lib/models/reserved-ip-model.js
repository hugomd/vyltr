class ReservedIPModel {
  constructor(data = {}) {
    this.SUBID = data.SUBID;
    this.DCID = data.DCID;
    this.ip_type = data.ip_type;
    this.subnet = data.subnet;
    this.subnet_size = data.subnet_size;
    this.label = data.label;
    this.attached_SUBID = data.attached_SUBID;
  }
}

module.exports = ReservedIPModel;
