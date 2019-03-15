var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
  console.log("hello world");
  return gulp.src('app/sass/style.scss') // Get source files with gulp.src
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination'))
}

gulp.task('watch', gulp.series(function () {
  browserSync.init({
    proxy: "http://Users/papatmayuri/workspace/site1/index.html",
    injectChanges: true,
    // plugins: ["bs-html-injector?files[]=*.html"]
  });

  let scss = gulp.watch('app/sass/style.scss');
  scss.on('change', function (path, stats) {
    console.log('you changed the scss');
    browserSync.notify("Injecting sCSS!");
    browserSync.reload("*.scss");
  })
}))