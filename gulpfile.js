var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var exec = require('child_process').exec;

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('package', function() {
  //manual uninstall, the apk will else not reflect the new changes
 // exec('adb uninstall com.ionicframework.ionicappiumprotractorexample806497', function(err, stdout, stderr) {
   // console.log(stdout);
   // console.log(stderr);
    //generate a new android-debug.apk
    exec('cordova build android', function(err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      //finally run protractor tests
      exec('protractor protractor-config.js', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
      });
   // });
  });
});


gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});


