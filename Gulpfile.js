var gulp = require('gulp'),
        jshint = require('gulp-jshint'),
        filelog = require('gulp-filelog'),
        rename = require('gulp-rename'),
        uglify = require('gulp-uglify'),
        options =  {
            globals: {
                DI: true,
                console: true,
                DEBUG: true
            },
            laxcomma: true,
            strict: true,
            validthis: true,
            undef: true
        };

gulp.task('default', function () {
    gulp.src('di.js')
            .pipe(filelog())
            .pipe(jshint(options))
            .pipe(jshint.reporter('default'))
            .pipe(uglify())
            .pipe(rename('di.min.js'))
            .pipe(gulp.dest('.'));
});
