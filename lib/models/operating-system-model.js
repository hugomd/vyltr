class OperatingSystemModel {
  constructor(data = {}) {
    this.name = data.name;
    this.arch = data.arch;
    this.family = data.family;
    this.windows = data.windows;
  }
}

module.exports = OperatingSystemModel;
