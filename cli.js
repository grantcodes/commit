#!/usr/bin/env node
'use strict'

import { resolve as pathResolve } from 'path'
import { existsSync, writeFileSync } from 'fs'
import { createRequire } from 'module'
import { setHooksFromConfig } from 'simple-git-hooks'
import { bootstrap } from 'commitizen/dist/cli/git-cz.js'

const require = createRequire(import.meta.url)

const SIMPLE_GIT_HOOKS_FILE = '.simple-git-hooks.cjs'
const COMMITLINT_FILE = 'commitlint.config.cjs'

const lastCommand = process.argv.pop()

async function install () {
  console.log('Installing git commit helpers...')

  // Create commitlint config
  if (!existsSync(SIMPLE_GIT_HOOKS_FILE)) {
    writeFileSync(
      SIMPLE_GIT_HOOKS_FILE,
      `const defaultHooks = require('@grantcodes/commit/${SIMPLE_GIT_HOOKS_FILE}'); module.exports = { ...defaultHooks };`
    )
  }

  // Create simple git hooks config
  if (!existsSync(COMMITLINT_FILE)) {
    writeFileSync(
      COMMITLINT_FILE,
      `module.exports = { extends: ['@grantcodes/commit/${COMMITLINT_FILE}'] };`
    )
  }

  // Install the git hooks
  setHooksFromConfig(process.cwd(), process.argv)

  console.log('Successfully installed')
}

// Install stuff when running `npx grantcodes-commit install`
if (lastCommand === 'install') {
  install()
  process.exit()
}

// Run a fancy commit with `npx grantcodes-commit`
bootstrap({
  cliPath: pathResolve(require.resolve('commitizen'), '../..'),
  config: {
    path: require.resolve('cz-conventional-changelog')
  }
})
