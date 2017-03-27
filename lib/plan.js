const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const PlanModel = require('./models/plan-model');

/**
 * @class Plan
 * @constructor
 * @param instance {Object} Axios instance
 */
class Plan {

  constructor(instance) {
    this.instance = instance;
  }

  /**
  * @method list
  * @return {Array} Array of PlanModel Objects
  */
  async list() {
    try {
      const response = await this.instance.get(routes.plan.list);
      if (response.status !== 200) {
        throw new Error(Errors.plan.list);
      }
      const {data} = response;
      return Object.keys(data).map(key => {
        return new PlanModel(data[key]);
      });
    } catch (err) {
      if (err) {
        return handleAxiosError(err);
      }
      throw new Error('Something went wrong.');
    }
  }
}

module.exports = Plan;
