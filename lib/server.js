const {stringify} = require('querystring');

const Errors = require('./errors');

const {logAxiosError} = Errors;
const routes = require('./routes');
const ServerModel = require('./models/server-model');

class Server {
  constructor(instance) {
    this.instance = instance;
  }

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
        return handleAxiosError(err);
      }
      throw new Error('Something went wrong');
    }
  }

  async create(body) {
    try {
      const response = await this.instance.post(routes.server.create, stringify(body));
      if (response.status !== 200) {
        throw new Error(Errors.server.create);
      }
      const {data: {SUBID}} = response;
      return SUBID;
    } catch (err) {
      if (err) {
        logAxiosError(err);
      }
      throw new Error('Something went wrong');
    }
  }
}

module.exports = Server;
