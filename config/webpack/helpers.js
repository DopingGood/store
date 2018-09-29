const { resolve } = require('path');

function rootPath(path) {
	return resolve(__dirname, '../../', path);
}

function path(path) {
	return resolve(__dirname, path);
}

module.exports = {
	rootPath: rootPath,
	path: path
}