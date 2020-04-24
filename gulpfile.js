// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const files = {
    scssPath: 'assets/scss/*.scss'
}

function scssTask() {
    var plugins = [
        autoprefixer({
            cascade: false
        }),
        // If need to minified styles
        cssnano()
    ];
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss(plugins)) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest('css')); // put final CSS in css folder
}

function watchTask() {
    watch(['assets/scss/*.scss'], parallel(scssTask));
}

exports.default = series(parallel(scssTask), watchTask);