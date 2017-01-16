var gulp = require('gulp'); // importamos gulp
var sass = require('gulp-sass'); // importamos sass

// definimos la tarea por defecto
gulp.task("default", function(){
    // cuando haya cambios en style.scss, compila sass
    gulp.watch('./src/scss/style.scss', ['compile-sass']);
});

// compila sass
gulp.task("compile-sass", function(){
    gulp.src('./src/scss/style.scss')    // cargo el style.scss
    .pipe(sass().on('error', sass.logError)) // compilo sass
    .pipe(gulp.dest('./dist/'))      // dejo el resultado en ./
});
