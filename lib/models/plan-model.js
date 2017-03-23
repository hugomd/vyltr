class PlanModel {
  constructor(data = {}) {
    this.VPSPLANID = data.VPSPLANID;
    this.name = data.name;
    this.vcpu_count = data.vcpu_count;
    this.ram = data.ram;
    this.disk = data.disk;
    this.bandwidth = data.bandwidth;
    this.price_per_month = data.price_per_month;
    this.windows = data.windows;
    this.plan_type = data.plan_type;
    this.available_locations = data.available_locations;
  }
}

module.exports = PlanModel;
