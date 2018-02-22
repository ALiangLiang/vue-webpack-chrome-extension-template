const { readFileSync } = require('fs')
const { join, dirname } = require('path')
const Module = require('module')

module.exports = class GenerateLocaleJsonPlugin {
  constructor ({ manifestPath }) {
    this._manifestPath = manifestPath || join(__dirname, '..', 'src', 'manifest.js')
    this._manifest = null
  }

  compile (comp) {
    try {
      const filename = this._manifestPath
      const code = readFileSync(filename, 'utf8')
      const mod = new Module(filename)
      mod.filename = filename
      mod._compile(code, filename)
      mod.paths = Module._nodeModulePaths(filename)
      const path = dirname(this._manifestPath)
      this._manifest = {
        path,
        content: mod.exports,
        src: join(path, 'manifest.js')
      }
    } catch (err) {
      console.error(err)
    }
  }

  generate (comp, done) {
    if (!this._manifest) return done()

    comp.fileDependencies.push(this._manifest.src)
    const source = JSON.stringify(this._manifest.content)
    comp.assets['manifest.json'] = {
      source: () => source,
      size: () => source.length
    }

    return done()
  }

  apply (compiler) {
    compiler.plugin('compile', (comp) => this.compile(comp))
    compiler.plugin('emit', (comp, done) => this.generate(comp, done))
  }
}
