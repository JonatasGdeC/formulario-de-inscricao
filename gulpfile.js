const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/style/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/style'))
}

exports.default = gulp.parallel(styles)
exports.watch = function(){
    gulp.watch('./src/style/*.scss', gulp.parallel(styles))
}