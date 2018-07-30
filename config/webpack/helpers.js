const { resolve } = require('path');

function rootPath(path) {
	return resolve(__dirname, '../../', path);
}

module.exports = {
	rootPath: rootPath
}