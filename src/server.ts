// import 'zone.js/dist/zone-node';
// import 'reflect-metadata';

// import { enableProdMode } from '@angular/core';

// import * as express from 'express';
// import { ngExpressEngine } from '@nguniversal/express-engine';
// import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
// import { webpack } from 'webpack-env';
// import { WebpackDevMiddleware } from 'webpack-dev-middleware';
// import { WebpackHotMiddleware } from 'webpack-hot-middleware';
// import { join } from 'path';

// enableProdMode();

// const { AppServerModuleNgFactory, lazy_module_app } = require('../dist/server/main.bundle');


// const app = express();
// const config = require('../webpack.config.js');
// const compiler = webpack(config)
// const port = 3100;

// app.use(webpackDevMiddleware(compiler, {
// 	publicPath: config.output.publicPath
// }));

// app.use(webpackHotMiddleware(compiler));

// const dist_folder = join(process.cwd(), 'dist');
// console.log('dist folder is', dist_folder, 'process.cwd is', process.cwd());
// app.engine('html', ngExpressEngine({
// 	bootstrap: AppServerModuleNgFactory,
// 	providers: [
// 		provideModuleMap(lazy_module_app)
// 	]
// }));

// app.set('view engine', 'html');
// app.set('views', join(dist_folder, 'browser'));

// app.get('/api/*', (req, res) => {
// 	res.status(404).send('request not supported');
// })

// app.get('*', express.static(join(dist_folder, 'browser')));

// app.get('', (req, res) => {
// 	res.render(join(dist_folder, 'browser', 'index.html'), {
// 		req
// 	});
// });

// app.listen(port, () => {
// 	console.log('Express server start at ${port} port ');
// })