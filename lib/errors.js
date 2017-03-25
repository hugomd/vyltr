const log = console.log;

exports.general = {
  noSUBID: 'Error no SUBID for server'
};

exports.os = {
  list: 'Error fetching operating system list.'
};

exports.server = {
  list: 'Error fetching server list.',
  fetch: 'Error fetching server information.',
  create: 'Error creating server.'
};

exports.plan = {
  list: 'Error fetching plans.'
};

exports.logAxiosError = err => {
  if (err.response) {
    log(err.response.data);
  } else if (err.message) {
    log(err.message);
  } else {
    log(err);
  }
};
