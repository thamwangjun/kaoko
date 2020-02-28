var stateObj = {}

function store (key, value) {
  stateObj[key] = value
}

function get (key) {
  return stateObj[key]
}

module.exports = {
  store: store,
  get: get
}
