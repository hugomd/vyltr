const axios = require('axios');

// Subclasses
const OperatingSystem = require('./lib/operating-system');
const Plan = require('./lib/plan');
const Server = require('./lib/server');
const Region = require('./lib/region');

class Vultr {
  constructor(token = null) {
    if (!token) {
      token = process.env.VULTR_API_TOKEN;
    }
    // Setup Axios
    const instance = axios.create({
      baseURL: 'https://api.vultr.com/v1/',
      timeout: 5000,
      headers: {'API-Key': token}
    });

    // Subclasses
    this.os = new OperatingSystem(instance);
    this.plan = new Plan(instance);
    this.region = new Region(instance);
    this.server = new Server(instance);
  }

  getInstance() {
    return this.instance;
  }
}

module.exports = Vultr;
