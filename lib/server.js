const {stringify} = require('querystring');

const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const ServerModel = require('./models/server-model');

/**
 * @class Server
 * @constructor
 * @param instance {Object} Axios instance
 */
class Server {

  constructor(instance) {
    this.instance = instance;
  }

  /**
  * @method list
  * @return {Array} {{#crossLink "ServerModel"}}{{/crossLink}} objects
  */
  async list() {
    try {
      const response = await this.instance.get(routes.server.list);
      if (response.status !== 200) {
        throw new Error(Errors.server.list);
      }
      const {data} = response;
      return Object.keys(data).map(key => {
        return new ServerModel(data[key]);
      });
    } catch (err) {
      if (err) {
        handleAxiosError(err);
      }
      throw new Error('Something went wrong');
    }
  }

  /**
   * @method create
   * @param body {Object} Payload
   * @return SUBID {String} SUBID of created server
   */
  async create(body) {
    try {
      const response = await this.instance.post(routes.server.create, stringify(body));
      if (response.status !== 200) {
        throw new Error(Errors.server.create);
      }
      const {data: {SUBID}} = response;
      return SUBID;
    } catch (err) {
      handleAxiosError(err);
    }
  }

  /**
   * @method halt
   * @param body {Object} Payload
   */
  async halt(body) {
    try {
      const response = await this.instance.post(routes.server.halt, stringify(body));
      if (response.status === 200) {
        return;
      }
      throw new Error(Errors.server.halt);
    } catch (err) {
      handleAxiosError(err);
    }
  }
}

module.exports = Server;
