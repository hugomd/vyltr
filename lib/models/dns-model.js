class DNSModel {
  constructor(data = {}) {
    this.domain = data.domain;
    this.date_created = data.date_created;
  }
}

module.exports = DNSModel;