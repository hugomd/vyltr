class ServerModel {
  constructor(data = {}) {
    this.SUBID = data.SUBID;
    this.os = data.os;
    this.ram = data.ram;
    this.disk = data.disk;
    this.main_ip = data.main_ip;
    this.vcpu_count = data.vcpu_count;
    this.location = data.location;
    this.DCID = data.DCID;
    this.default_password = data.default_password;
    this.date_created = data.date_created;
    this.pending_charges = data.pending_charges;
    this.cost_per_month = data.cost_per_month;
    this.current_bandwidth_gb = data.current_bandwidth_gb;
    this.allowed_bandwidth_gb = data.allowed_bandwidth_gb;
    this.netmask_v4 = data.netmask_v4;
    this.gateway_v4 = data.gateway_v4;
    this.power_status = data.power_status;
    this.server_state = data.server_state;
    this.VPSPLANID = data.VPSPLANID;
    this.v6_network = data.v6_network;
    this.v6_main_ip = data.v6_main_ip;
    this.v6_network_size = data.v6_network_size;
    this.v6_networks = data.v6_networks;
    this.label = data.label;
    this.internal_ip = data.internal_ip;
    this.kvm_url = data.kvm_url;
    this.auto_backups = data.auto_backups;
    this.tag = data.tag;
    this.OSID = data.OSID;
    this.APPID = data.APPID;
    this.FIREWALLGROUPID = data.FIREWALLGROUPID;
  }
}

module.exports = ServerModel;
