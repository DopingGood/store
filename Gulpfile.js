'use strict';
// Инициализируем плагины
var gulp        = require('gulp'), // Сообственно Gulp JS
    stylus      = require('gulp-stylus'), // CSS preprocessor
    jade        = require('gulp-jade'), // Jade
    angularJade = require('gulp-jade'),
    csso        = require('gulp-csso'), // Минификация CSS
    uglify      = require('gulp-uglify'), // Минификация JS
    concat      = require('gulp-concat'), // Склейка файлов
    connect     = require('gulp-connect'), // http-сервер
    nib         = require('nib'),
    typescript  = require('gulp-typescript'),
    express     = require('express'),
    bodyParser  = require('body-parser');

// Собираем CSS препроцессор
gulp.task('stylus', function () {
    gulp.src('app/src/stylus/*.styl')
        .pipe(stylus({
            use: nib()
        }))// Преобразуем в css
    .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(concat('style.css')) // склеиваем полученные css в style.css
    .pipe(gulp.dest('app/dev/css')) // отправляем в версию для разработки
    .pipe(connect.reload());
});

// Собираем HTML препроцессор
gulp.task('jade', function() {
    gulp.src(['app/src/jade/**/*.jade', '!app/src/jade/utils/*.jade'])
        .pipe(jade({
            pretty: true
        }))  // Собираем Jade только в папке assets/template/ исключая файлы из utils
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(gulp.dest('app/dev')) // отправляем в версию для разработки
    .pipe(connect.reload()); // даем команду на перезагрузку страницы
}); 
// Собираем Jade для angular
gulp.task('angularJade', function() {
    gulp.src(['app/src/js/angular/**/*.jade'])
        .pipe(jade({
            pretty: true
        })) // Собираем Jade из angular
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(gulp.dest('app/dev/js/angular')) // отправляем в версию для разработки
    .pipe(connect.reload()); // даем команду на перезагрузку страницы
});

// Собираем Angular
gulp.task('angular', function() {
    gulp.src(['app/src/js/angular/**/*.js'])
    // .pipe(concat('script.js')) // Склеиваем JS
        .on('error', console.log)
    .pipe(gulp.dest('app/dev/js/angular'))
    .pipe(connect.reload()); // даем команду на перезагрузку страницы
});

// Собираем TypeScript
// gulp.task('typescript', function() {
//     gulp.src(['app/src/js/**/*.ts', '!app/src/js/angular/**/*.js'])
//         .pipe(typescript({})) // Собираем typescript
//         .on('error', console.log) // Если есть ошибки, выводим и продолжаем
//     .pipe(concat('ts.js')) // Склеиваем в javascript
//     .pipe(gulp.dest('app/src/js'));
// });

// Собираем JS
gulp.task('js', function() {
    gulp.src(['app/src/js/**/*.js'])
        .pipe(concat('script.js')) // Склеиваем javascript
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(gulp.dest('app/dev/js'))
    .pipe(connect.reload()); // даем команду на перезагрузку страницы
});

//  Запускаем сервер express
var app = express(),
port    = 3000;
app.use(express.static('app/dev'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/womenCatalog.html', function (req, res) {
    console.log('Receive data');
    console.log(req.body);
    res.end("yes");
});

app.listen(port, function () {
    console.log('server start at', port);
});
        //Неизменный таск
// Локальный сервер для разработки
gulp.task('http-server', function() {
    connect.server({
        root: 'app/dev',
        livereload: true
    });
});
        // Неизменный таск
// Смотрим за изменениями
gulp.task('watch', function () {
    gulp.watch(['app/src/stylus/**/*.styl'], ['stylus']);
    gulp.watch(['app/src/jade/**/*.jade'], ['jade']);
    gulp.watch(['app/src/js/angular/**/*.jade'], ['angularJade']); 
    gulp.watch(['app/src/js/angular/**/*.js'], ['angular']);
    // gulp.watch(['app/src/js/**/*.ts'], ['typescript']);
    gulp.watch(['app/src/js/**/*.js'], ['js']);
});

        // Неизменный таск
// Запуск сервера разработки gulp watch
gulp.task('default', ['http-server', 'watch']);