module.exports = {
  'commit-msg': 'npx --no -- commitlint --edit "${1}"',
  'prepare-commit-msg': `
    if [ "$2" != "message" ]; then
      exec < /dev/tty && npx @grantcodes/commit --hook || true
    fi
  `,
}
