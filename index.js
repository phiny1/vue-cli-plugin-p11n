const debug = require('debug')('vue-cli-plugin-p11n:service')

module.exports = (api, options) => {
  debug('options', options)

  const commands = ['build', 'demo', 'docs']
  commands.forEach(command => {
    const p11nOptions = options && options.pluginOptions && options.pluginOptions.p11n || {}
    const target = require(`./lib/${command}/command`)(api, p11nOptions)
    api.registerCommand(command, target.opts, target.fn)
  })
}
