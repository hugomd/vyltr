const axios = require('axios');

// Subclasses
const OperatingSystem = require('./operating-system');
const Plan = require('./plan');
const Server = require('./server');
const Region = require('./region');

/**
 * @class Vultr
 * @constructor Constructor
 * @param token {String} Vultr API Token, can also be set in environment.
 * @example
 * ```
 * const Vultr = require('vyltr');
 *
 * // Pass API Token as parameter.
 * const v = Vultr('VULTR_API_TOKEN');
 *
 * // Defaults to using process.env.VULTR_API_TOKEN
 * const v = Vultr();
 * ```
 */
class Vultr {

  constructor(token = null) {
    if (!token) {
        if (!process.env.VULTR_API_TOKEN){
            throw new Error("Env variable 'VULTR_API_TOKEN' must be set!");
        }
      token = process.env.VULTR_API_TOKEN;
    }
    // Setup Axios
    const instance = axios.create({
      baseURL: 'https://api.vultr.com/v1/',
      timeout: 15000,
      headers: {'API-Key': token}
    });

    // Subclasses
    this.os = new OperatingSystem(instance);
    this.plan = new Plan(instance);
    this.region = new Region(instance);
    this.server = new Server(instance);
  }
}

module.exports = Vultr;
