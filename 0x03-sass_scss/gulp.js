const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return src('index.scss')
    .pipe(sass())
    .pipe(dest(css))
}

function watchSass() {
    watch(['index.scss'], compileSass);
}

exports.default = series(compileSass, watchSass);