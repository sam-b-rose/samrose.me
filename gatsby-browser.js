const { log } = require('@utils');

exports.onInitialClientRender = () => {
  console.group('samrose.me');
  log('Want to see the source code? It is public!', 'primary');
  log('https://github.com/samrose3/samrose.me');
  console.groupEnd();
};
