const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const OperatingSystemModel = require('./models/operating-system-model');

/**
 * @class OperatingSystem
 * @constructor
 * @param instance {Object} Axios instance
 */
class OperatingSystem {

  constructor(instance) {
    this.instance = instance;
  }

  /**
  * @method list
  * @return {Array} Array of OperatingSystem Objects
  */
  async list() {
    try {
      const response = await this.instance.get(routes.os.list);
      if (response.status !== 200) {
        throw new Error(Errors.os.list);
      }
      const {data} = response;
      return Object.keys(data).map(key => {
        return new OperatingSystemModel(data[key]);
      });
    } catch (err) {
      handleAxiosError(err);
    }
  }
}

module.exports = OperatingSystem;
