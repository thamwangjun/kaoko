var cacheObj = {}

function store (key, value) {
  cacheObj[key] = value
}

function get (key) {
  return cacheObj[key]
}

module.exports = {
  store: store,
  get: get
}
