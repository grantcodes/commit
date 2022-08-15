const path = require('path')

module.exports = {
  'commit-msg': `npx --no -- commitlint --edit $1`,
  'prepare-commit-msg': `exec < /dev/tty && ${path.join(
    __dirname,
    './cli'
  )} || true`,
}
