const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const RegionModel = require('./models/region-model');

/**
 * @class Region
 * @constructor
 * @param instance {Object} Axios instance
 */
class Region {

  constructor(instance) {
    this.instance = instance;
  }

  /**
  * @method list
  * @return {Array} Array of RegionModel Objects
  */
  async list() {
    try {
      const response = await this.instance.get(routes.region.list);
      if (response.status !== 200) {
        throw new Error(Errors.region.list);
      }
      const {data} = response;
      return Object.keys(data).map(key => {
        return new RegionModel(data[key]);
      });
    } catch (err) {
      handleAxiosError(err);
    }
  }
}

module.exports = Region;
