var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

var dist = './assets/dist/',
	src = './assets/src/';
function errHandler(title) {
	return plugins.plumber({
		errorHandler: plugins.notify.onError({
			title: title || 'Error running Gulp',
			message: "<%= error.message %>"
		})
	});
}
gulp.task('stylus', function () {
	gulp.src(src + 'css/*.styl')
	.pipe(errHandler("Error Stylus"))
	.pipe(plugins.stylus({ compress: true }))
	.pipe(gulp.dest(dist + 'css'))
});

gulp.task('concat', function () {
	gulp.src([
		'./bower_components/bootstrap/dist/css/bootstrap.min.css',
		dist + 'css/*.css'
		])
	.pipe(plugins.concat('bundle.css'))
	.pipe(gulp.dest('bundle'))
});

gulp.task('watch', ['stylus', 'concat'], function () {
	gulp.watch(src + 'css/*.styl', ['stylus']);
	gulp.watch(dist + 'css/*.css', ['concat']);
});

gulp.task('default', ['watch']);