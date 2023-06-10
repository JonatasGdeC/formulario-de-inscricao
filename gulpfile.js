const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

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

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

exports.default = gulp.parallel(styles, images, scripts)
exports.watch = function(){
    gulp.watch('./src/style/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}