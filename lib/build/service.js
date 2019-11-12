const getAllEntries = require('./entry')
const bundle = require('./bundle')
const banner = require('./banner')

module.exports = (pkg, inOut, langInfo, args, p11nOptions) => {
  const { name, version, author, license } = pkg
  const entries = getAllEntries(
    { name, version }, 
    inOut,
    banner({
      name,
      version,
      author,
      year: new Date().getFullYear(),
      license
    }),
    langInfo,
    p11nOptions
  )

  return bundle(entries)
}
