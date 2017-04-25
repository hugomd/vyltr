const env = require('./env');

let log = console.log;
if (env.NODE_ENV === 'test') {
  log = () => {};
}

exports.general = {
  noSUBID: 'Error no SUBID for server'
};

exports.os = {
  list: 'Error fetching operating system list.'
};

exports.server = {
  list: 'Error fetching server list.',
  fetch: 'Error fetching server information.',
  create: 'Error creating server.',
  halt: 'Error halting server.'
};

exports.plan = {
  list: 'Error fetching plans.'
};

exports.handleAxiosError = err => {
  if (err.response) {
    log(err.response.data);
  } else if (err.message) {
    log(err.message);
  } else {
    log(err);
  }
  throw new Error('Something went wrong');
};
