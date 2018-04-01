var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: {
        css: 'css/',
    },
    src: {
        style: 'scss/*.scss',
    },
    watch: {
        style: 'scss/*.scss',
    }
};


gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function(){

    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });

});


gulp.task('default', ['build', 'webserver', 'watch']);