const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const OperatingSystemModel = require('./models/operating-system-model');

const log = console.log;

class OperatingSystem {
  constructor(instance) {
    this.instance = instance;
  }

  async list() {
    try {
      const response = await this.instance.get(routes.os.list);
      if (response.status !== 200) {
        throw new Error(Errors.os.list);
      }
      const {data: os} = response;
      return Object.keys(os).map(key => {
        return new OperatingSystemModel(os[key])
      });
    } catch (err) {
      if (err) {
        return handleAxiosError(err);
      } else {
        throw new Error('Something went wrong');
      }
    }
  }
}

module.exports = OperatingSystem;
