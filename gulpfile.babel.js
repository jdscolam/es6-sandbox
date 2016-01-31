'use strict';

import gulp from 'gulp';

gulp.task('default', () => {
   console.log('default task');
});

gulp.task('build-prod', () => {
   return gulp.src(['dist/**/*.*', '!dist/**/*.spec.js'])
    .pipe(gulp.dest('prod'));
});