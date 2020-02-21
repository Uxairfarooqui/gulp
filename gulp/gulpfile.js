const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');


// Logs Message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});


//Copy All HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('build'));
});


// Copy All PHP files
gulp.task('copyPhp', function(){
  gulp.src('src/*.php')
      .pipe(gulp.dest('build'));
});

gulp.task('copyIncPhp', function(){
  gulp.src('src/inc/*.php')
      .pipe(gulp.dest('build/inc'));
});

// Optimize Images
gulp.task('imageMinMain', () =>
	gulp.src('src/assets/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/assets/images/'))
);

//Minify JS
gulp.task('minify-JS', function() {
  gulp.src(['src/assets/js/*.js', 'src/assets/js/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('build/assets/js'))
});



//Minify CSS
gulp.task('minify-CSS', () => {
  // Folder with files to minify
  return gulp.src('src/assets/css/*.css', 'src/assets/css/*.css')
  //The method pipe() allow you to chain multiple tasks together 
  //I execute the task to minify the files
 .pipe(cleanCSS())
 //I define the destination of the minified files with the method dest
 .pipe(gulp.dest('build/assets/css'));
});

gulp.task('default', gulp.parallel(
  'copyHtml',
  'copyPhp',
  'copyIncPhp',
  'imageMinMain',
  'minify-JS',
  'minify-CSS'
)
);


gulp.task('watch', function(){
  gulp.watch('src/*.html', ['copyHtml']);
  gulp.watch('src/*.php', ['copyPhp']);
  gulp.watch('src/inc/*.php', ['copyIncPhp']);
  gulp.watch('src/assets/img/*', ['imageMinMain']);
  gulp.watch('src/assets/js/*.js', ['minify-JS']);
  gulp.watch('src/assets/css/*.css', ['minify-CSS']);
});