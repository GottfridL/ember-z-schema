module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'z-schema'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}