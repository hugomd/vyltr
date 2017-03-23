const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const OperatingSystemModel = require('./models/operating-system-model');

const log = console.log;

class OperatingSystem {
  constructor(instance) {
    this.instance = instance;
  }

  list() {
    return this.instance
      .get(routes.os.list)
      .then(res => {
        if (res.status !== 200) {
          throw red(Errors.os.list);
        }
        return res;
      })
      .then(({data: os} = {}) => 
        Object.keys(os).map(key => {
          return new OperatingSystemModel(os[key]);
        })
      )
      .catch(handleAxiosError);
  }
}

module.exports = OperatingSystem;
