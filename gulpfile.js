var gulp = require('gulp'),

    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    jsmin = require('gulp-jsmin'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    connect = require('gulp-connect'),

    input  = {
      'html': 'src/**/*.html',
      'css': 'src/assets/scss/**/*.scss',
      'js': 'src/assets/js/**/*.js',
      'img': 'src/assets/img/**/*',
      'fonts': 'src/assets/fonts/**/*'
    },

    output = {
      'html': 'build/',
      'css': 'build/assets/css/',
      'js': 'build/assets/js/',
      'img': 'build/assets/img/',
      'fonts': 'build/assets/fonts/'
    };

// Set up BrowserSync
gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 8080,
    root: "build"
  });
})

// Compile and minify SASS
gulp.task('sass', function() {
  gulp.src(input.css)
  .pipe(sass())
  .pipe(gulp.dest(output.css))
  .pipe(connect.reload());
});

// Minify CSS for production
gulp.task('cssmin', function() {
  gulp.src(input.css)
  .pipe(sass())
  .pipe(cssmin())
  .pipe(gulp.dest(output.css))
  .pipe(connect.reload());
})

// Compile and minify JS
gulp.task('js', function() {
  gulp.src(input.js)
  .pipe(concat('app.js'))
  .pipe(gulp.dest(output.js))
  .pipe(connect.reload());
});

// Minify JS for production
gulp.task('jsmin', function() {
  gulp.src(input.js)
  .pipe(concat('app.js'))
  .pipe(jsmin())
  .pipe(gulp.dest(output.js))
  .pipe(connect.reload());
})

// Copy HTML files to dist
gulp.task('html', function() {
  gulp.src(input.html)
  .pipe(gulp.dest(output.html))
  .pipe(connect.reload());
});

// Copy static image assets
gulp.task('img', function() {
  gulp.src(input.img)
  .pipe(gulp.dest(output.img))
  .pipe(connect.reload());
});

// Optimise images for production
gulp.task('imgmin', function() {
  gulp.src(input.img)
  .pipe(imagemin({ progressive: true }))
  .pipe(gulp.dest(output.img))
  .pipe(connect.reload());
});

// Copy static font assets
gulp.task('fonts', function() {
  gulp.src(input.fonts)
  .pipe(gulp.dest(output.fonts))
  .pipe(connect.reload());
});

gulp.task('upload', function() {
// code for uploading goes here
})

// Watch directories
gulp.task('watch', function() {
  gulp.watch(input.html, ['html']);
  gulp.watch(input.css, ['sass']);
  gulp.watch(input.js, ['js']);
  gulp.watch(input.imgs, ['img']);
  gulp.watch(input.fonts, ['fonts']);
});

// Clean build directory
gulp.task('clean', function() {
  del.sync(['build/**']);
});

// Minify ready for production
gulp.task('prod',['html', 'cssmin', 'jsmin', 'imgmin', 'fonts'])

// Deploy to server
gulp.task('deploy',['prod', 'upload']);

// Default task
gulp.task('default', ['html', 'sass', 'js', 'img', 'fonts', 'watch', 'connect']);