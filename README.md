# @grantcodes/commit

A personal Commitizen config to help me create lovely, consistent, organized commits.

## Usage

1. Install with `npm install @grantcodes/commit --save-dev`
2. Run `echo "module.exports = { extends: ['@grantcodes/commit/commitlink.config.js'] };" > commitlint.config.js` to create the commitlint config
3. Run `echo "const defaultHooks = require('@grantcodes/commit/simple-git-hooks.js');\nmodule.exports = { ...defaultHooks };" > .simple-git-hooks.js`
4. Run `npx simple-git-hooks` to setup the automatic git hooks
5. Stage changes as usual
6. Run `git commit` when creating a commit and a nice UI should appear to help format commits
