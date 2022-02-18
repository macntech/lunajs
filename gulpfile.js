//
// Gulpfile to build final library files 
//
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var minifyjs = require('gulp-uglify');
var minifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
const { series } = require('gulp');
//END 

// Create CSS from SASS Files
function buildStyles() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
};

// Create minified CSS for Release
function minifyLunaCSS() {
    return gulp.src('./src/css/*.css')
        .pipe(minifycss())
        .pipe(rename('luna.min.css'))
        .pipe(gulp.dest('./dist'));
};

//Create minified JS for Release
function minifyLunaJS() {
    return gulp.src('./src/js/*.js')
        .pipe(minifyjs())
        .pipe(rename('luna.min.js'))
        .pipe(gulp.dest('./dist'));
};


//Export task for final build
exports.default = series(buildStyles, minifyLunaCSS, minifyLunaJS);