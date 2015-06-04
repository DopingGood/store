// Generated on 2015-03-22 using generator-legen 0.0.4
'use strict';
// Инициализируем плагины
var gulp    = require('gulp'), // Сообственно Gulp JS
    stylus  = require('gulp-stylus'), // CSS preprocessor
    jade    = require('gulp-jade'), // Jade
    coffee  = require('gulp-coffee'), // coffee-script
    csso    = require('gulp-csso'), // Минификация CSS
    uglify  = require('gulp-uglify'), // Минификация JS
    concat  = require('gulp-concat'), // Склейка файлов
    connect = require('gulp-connect'), // http-сервер
    nib     = require('nib');



        //Вариативный таск 
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
   
        //Вариативный таск
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
        //Вариативный таск
// Собираем JS
gulp.task('js', function() {
    gulp.src(['app/src/coffee/**/*.js'])
        .pipe(concat('script.js')) // Склеиваем JS
        .on('error', console.log)
        .pipe(gulp.dest('app/dev/js'))
        .pipe(connect.reload()); // даем команду на перезагрузку страницы
});
 
        //Неизменный таск
// Локальный сервер для разработки
gulp.task('http-server', function() {
    connect.server(
    {
        root: 'app/dev',
        livereload: true
    });
});
        // Неизменный таск
// Смотрим за изменениями
gulp.task('watch', function () {
    gulp.watch(['app/src/stylus/**/*.styl'], ['stylus']);
    gulp.watch(['app/src/jade/**/*.jade'], ['jade']);  
    gulp.watch(['app/src/coffee/**/*.js'], ['js']);
});

        // Неизменный таск
// Запуск сервера разработки gulp watch
gulp.task('default', ['http-server', 'watch']);
 
        // Вариативный таск
// Запуск сборщика продакшена
gulp.task('build', function() {
 
    // CSS preprocessor
    gulp.src(['app/src/stylus/**/*.styl'])
        .pipe(css({
            use: nib()
        })) // преобразуем sass в css
        .pipe(concat('style.css')) // склеиванием css
        // .pipe(csso()) // минимизируем css
        .pipe(gulp.dest('app/build/css')); // записываем css
 
    // jade
    gulp.src(['app/src/jade/**/*.jade', '!app/assets/jade/utils/**/*.jade'])
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('app/build'));
 
    // js
    gulp.src(['app/src/coffee/**/*.js'])
        .pipe(concat('script.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('app/build/js'));
});