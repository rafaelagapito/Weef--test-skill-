var gulp = require('gulp');
var $ = require('gulp-load-plugins')({rename: {'gulp-if': 'if'}});
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
// var jshint = require('gulp-jshint');
// var jshintStylish = require('jshint-stylish');
var csslint = require('gulp-csslint');
let sassRefresh = {
    dev : {
        noCache: true,
        outputStyle: 'expanded'
    },
    prod : {
        outputStyle: 'compressed'
    }
};

/* Tasks base */
gulp.task('copy', ['clean'], function() {
    return gulp.src(['src/**/*'])
        .pipe(gulp.dest('docs'));
});

gulp.task('clean', function() {
    return gulp.src('docs/*', {read: false})
        .pipe($.clean());
});

/* Sass */
gulp.task('sass', function() {
    gulp.src('assets/sass/*.s{a,c}ss')
        .pipe(plumber())
        .pipe(sass(sassRefresh))
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/css/'))
        .pipe(reload({stream:true}));
});

/* Browser Sync */
gulp.task('browser-sync', function() {
    browserSync.init({
        open: false,
		server: {
			baseDir: './'
		}
    });
    gulp.watch("*.html").on("change", reload);

});

/* Alias */
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch('assets/sass/**/*.s{a,c}ss',['sass']);

    // gulp.watch('src/peruglur-content/*.js').on('change', function(event) {
    //     gulp.src(event.path)
    //         .pipe(jshint())
    //         .pipe(jshint.reporter(jshintStylish));
    // });

    gulp.watch('assets/css/').on('change', function(event) {
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.formatter());
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);
});

gulp.task('build', ['copy'], function (callback) {
    return $.sequence(['minify-js', 'minify-css', 'minify-html', 'imagemin'], 'useref')(callback)
});

