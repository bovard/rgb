var gulp = require('gulp');  
var browserify = require('gulp-browserify');  
var concat = require('gulp-concat');  
var styl = require('gulp-styl');  
var refresh = require('gulp-livereload');  
var lr = require('tiny-lr');  
var server = lr();

var paths = {
    main: ['src/main.js']
};

gulp.task('scripts', function() {  
    gulp.src(paths.main)
        .pipe(browserify({
            shim: {
                jquery: {
                    path: 'lib/jquery-1.11.0.min.js',
                    exports: '$'
                }
            }
        }))
        .pipe(concat('rgb.js?cb='+Math.random()))
        .pipe(gulp.dest('build'))
        .pipe(refresh(server))
});

gulp.task('styles', function() {  
    gulp.src(['css/**/*.css'])
        .pipe(styl({compress : true}))
        .pipe(gulp.dest('build'))
        .pipe(refresh(server))
});

gulp.task('lr-server', function() {  
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('default', function() {  
    //gulp.run('lr-server', 'scripts', 'styles');
    //gulp.run('scripts');

    gulp.watch('src/**', function(event) {
        gulp.run('scripts');
    });

    //gulp.watch('css/**', function(event) {
    //    gulp.run('styles');
    //});
});
