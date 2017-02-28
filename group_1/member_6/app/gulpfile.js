/**
 * Created by dujingya on 17/2/27.
 */
var gulp=require('gulp');
var babel=require('gulp-babel');

gulp.task('es2015',function () {
   return gulp.src('routes/*.js')
       .pipe(babel())
       .pipe(gulp.dest('./dist'))
});
gulp.task('default',['es2015']);