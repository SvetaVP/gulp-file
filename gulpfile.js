var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    gcmq = require('gulp-group-css-media-queries');
var browserSync = require('browser-sync');

gulp.task('default', () =>
    gulp.src('dev/less/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(gulp.dest('dev/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
);

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'D://blue-white-site/dev/'
        },
    })
});

gulp.task('watch', ['browserSync'], function (){
    gulp.watch('dev/less/*.less', ['default']);
    gulp.watch('dev/*.html', browserSync.reload);
    gulp.watch('dev/js/**/*.js', browserSync.reload);
});