class RegionModel {
  constructor(data = {}) {
    this.DCID = data.DCID;
    this.name = data.name;
    this.country = data.country;
    this.continent = data.continent;
    this.state = data.state;
    this.ddos_protection = data.ddos_protection;
    this.block_storage = data.block_storage;
    this.regioncode = data.regioncode;
  }
}

module.exports = RegionModel;
