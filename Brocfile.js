module.exports = 'public';

// Pulls in the `merge` function with NPM
var merge = require('broccoli-merge-trees');

module.exports = merge(['public']);
