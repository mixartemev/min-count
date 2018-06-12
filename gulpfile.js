const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('js', () => {
    return gulp.src('./src/index.js')
        .pipe(babel({
            presets: ['minify']
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['js'],() => {
    gulp.watch('src/index.js',['js']);
});