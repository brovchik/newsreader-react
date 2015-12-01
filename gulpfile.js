var gulp = require('gulp');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var minifyCss = require('gulp-minify-css');
var _ = require('lodash');
var clean = require('gulp-clean');


/*------CLEAN TASKS------*/
// Clean all
gulp.task('clean', function(cb) {
    var src = [
        './temp/',
        './public/**/*.css',
        './public/**/*.js',
        '!./public/init/*.js'
    ];

    return gulp.src(src, { read: false }).pipe(clean());
});

// Clean css
gulp.task('cleancss', function(cb) {
    var src = [
        './temp/**/*.css',
        './public/**/*.css'
    ];

    return gulp.src(src, { read: false }).pipe(clean());
});

// Clean js
gulp.task('cleanjs', function(cb) {
    var src = [
        './temp/**/*.js',
        './public/js/**/*.js'
    ];

    return gulp.src(src, { read: false }).pipe(clean());
});



/*------JS CONCAT TASKS------*/
// Concat user js
gulp.task('ujsc', function() {
    var dest = './temp/js';
    var srcFldr = './src/NewsReader/';

    gulp.src('./src/NewsReader/**/_.js')
        .pipe(react())
        .pipe(concat('namespaces.js'))
        .pipe(gulp.dest(srcFldr));

    return gulp.src([, './src/NewsReader/**/*.js', './src/init.js','!./src/NewsReader/**/_.js'])
        .pipe(react())
        .pipe(concat('script.js'))
        .pipe(gulp.dest(dest)) ;
});


// Concat third party js
gulp.task('tpjsc', function() {
    var dest = './temp/js';

    return gulp.src([
        './src/thirdParty/react/react.js',
        './src/thirdParty/react/react-dom.js',
        './src/thirdParty/lodash/lodash.js',
        './src/thirdParty/jquery/dist/jquery.js',
        './src/thirdParty/marked/marked.min.js',
        './src/thirdParty/bootstrap/dist/js/bootstrap.js'
    ])
        .pipe(concat('thirdParty.js'))
        .pipe(gulp.dest(dest));
});


// Concat all js
gulp.task('cjs', function(cb) {
    runSequence(['ujsc', 'tpjsc'], cb);
});



/*------CSS LESS CONCAT TASKS------*/
// Makes CSS from LESS files using basic folder structure
gulp.task('less', function () {
    var dest = './temp/less';

    return gulp.src('./styles/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest(dest));
});


// Concatenates client CSS files includes compiled from LESS
gulp.task('ucssc', ['less'], function () {
    var dest = './temp/css';

    return gulp.src([
        './temp/less/**/*.css',
        './styles/css/**/*.css'
    ])
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest(dest));
});


// Concatenates third party CSS files
gulp.task('tpcssc', function () {
    var dest = './temp/css';

    return gulp.src([
        './src/thirdParty/bootstrap/dist/css/bootstrap-theme.css',
        './src/thirdParty/bootstrap/dist/css/bootstrap.css'])
        .pipe(concatCss("thirdParty.css"))
        .pipe(gulp.dest(dest));
});

// Concat all css
gulp.task('ccss', ['less'], function(cb) {
    runSequence(['ucssc', 'tpcssc'], cb);
});



/*------UGLIFY AND MINIFY------*/

// Uglify client JS
gulp.task('ujsu', ['ujsc'], function() {
    var dest = './public/js';

    return gulp.src('temp/js/script.js')
        .pipe(uglify({
            mangle: true
        }))
        .pipe(gulp.dest(dest));
});


// Uglify third party JS
gulp.task('tpjsu', ['tpjsc'], function() {
    var dest = './public/js';

    return gulp.src('temp/js/thirdParty.js')
        .pipe(uglify({
            mangle: true
        }))
        .pipe(gulp.dest(dest));
});


// Uglify all JS
gulp.task('ujs', function(cb) {
    runSequence('cleanjs', ['ujsu', 'tpjsu'], cb);
});


// Minify client css
gulp.task('ucssmin', ['ucssc'], function() {
    var dest = './public/css';

    return gulp.src('./temp/css/style.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(dest));
});


// Minify third party css
gulp.task('tpcssmin', ['tpcssc'], function() {
    var dest = './public/css';

    return gulp.src('./temp/css/thirdParty.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(dest));
});


// Minify all css
gulp.task('cssmin', function(cb) {
    runSequence('cleancss', ['ucssmin', 'tpcssmin'], cb);
});


// Uglufy and minify JS and CSS
gulp.task('min', function(cb) {
    runSequence('clean', ['ujs', 'cssmin'], cb);
});


/*------Copy not minified files to public for debugging*/
gulp.task('copydbscripts', ['cjs'], function() {
    var src = [
        './temp/js/**/*.js'
    ];
    var dest = './public/js';
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});

gulp.task('copydbcss', ['ccss'], function() {
    var src = [
        './temp/css/**/*.css'
    ];
    var dest = './public/css';
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});

// Debug task (set as default)
gulp.task('default', function(cb) {
    runSequence('clean', ['copydbscripts', 'copydbcss'], cb);
});

// Build task with minifying
gulp.task('build', function(cb) {
    runSequence('clean' ,'min', cb);
});


// Build css for debugging
gulp.task('css', function(cb) {
    runSequence('cleancss', 'ccss', 'copydbcss',  cb);
});

// Build css for production
gulp.task('bcss', function(cb) {
    runSequence('cleancss', 'cssmin', cb);
});

// Build js for debugging
gulp.task('js', function(cb) {
    runSequence('cleanjs', 'cjs', 'copydbscripts',  cb);
});

// Build js for production
gulp.task('bjs', function(cb) {
    runSequence('cleanjs', 'ujs', cb);
});

