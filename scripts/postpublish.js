const { cp } = require('shelljs')

function copyPkg() {
  cp('-Rf', 'package.json', 'lib/package.json')
}

function main() {
  copyPkg()
}

main()
