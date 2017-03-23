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
      const { data } = response;
      return Object.keys(data).map(key => {
        return new OperatingSystemModel(data[key])
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
