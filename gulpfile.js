const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')

function styles(){
    return gulp.src('./src/style/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/style'))
}

function images(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
}

exports.default = gulp.parallel(styles, images)
exports.watch = function(){
    gulp.watch('./src/style/*.scss', gulp.parallel(styles))
}