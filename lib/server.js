const {stringify} = require('querystring');

const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const ServerModel = require('./models/server-model');

const log = console.log;


class Server {
  constructor(instance) {
    this.instance = instance;
  }

  list() {
    return this.instance
      .get(routes.server.list)
      .then(res => {
        if (res.status !== 200) {
          throw red(Errors.os.list);
        }
        return res;
      })
      .then(({data: servers} = {}) => 
        Object.keys(servers).map(key => {
          return new ServerModel(servers[key]);
        })
      )
      .catch(handleAxiosError);
  }

  create(body) {
    return this.instance
      .post(routes.server.create, stringify(body))
      .then(res => {
        if (res.status !== 200) {
          throw red(Errors.server.create);
        }
        return res;
      })
      .then(({data: {SUBID}}) => {
        log(`Server created. SUBID is: ${SUBID}`);
      })
      .catch(handleAxiosError);
  }
}

module.exports = Server;
