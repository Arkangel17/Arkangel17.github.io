const gulp = require('gulp');
const {series} = require('gulp');
const {parallel} = require('gulp');

const paths = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',
    docs: 'docs',
    docsIndex: 'docs/**/*.html',
    docsCSS: 'docs/**/*.css',
    docsJS: 'docs/**/*.js'
};

gulp.task('html', () => {
    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.docs));
});

gulp.task('css', () => {
    return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.docs));
});

gulp.task('js', () => {
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.docs));
});

gulp.task('default', () => {
    console.log('gulp running...');
});


gulp.task('default', parallel('html', 'css', 'js'));