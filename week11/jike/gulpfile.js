// 载入模块
/*
    Autoprefixer (gulp-autoprefixer)
    缩小化(minify)CSS (gulp-minify-css)
    丑化(Uglify) (gulp-uglify)
    即时重整(LiveReload) (gulp-livereload)
    清理档案 (gulp-clean)
    更动通知 (gulp-notify)
    sass(gulp-sass)
    concat(合并)
*/
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-ruby-sass'),
    gulpsync = require('gulp-sync')(gulp),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector');
//sass
// 样式
gulp.task('styles', function() {
    return sass('sass/app.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest('./dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev'))
        .pipe(notify({ message: 'Styles task complete' }));
});

// scripts
gulp.task('scripts', function() {
    return gulp.src('./js/index.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify)
        .pipe(gulp.dest('dist/js'))
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev.manifet())
        .pipe(gulp.dest('./dist/rev'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('rev', function () {
    return gulp.src(['dist/rev/*.json', 'index.html'])
        .pipe( revCollector({
            replaceReved: true,
        }) )
        .pipe( gulp.dest('') )
        .pipe(notify({ message: 'Rev task complete' }));
});

// 清理
gulp.task('clean', function() {
    return gulp.src(['./dist'], { read: false })
        .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts','rev');
});

// 监听
gulp.task('watch', function() {
    // 监听所有.scss档
    gulp.watch('sass/*.scss', ['styles']);

    // 监听所有.js档
    gulp.watch('js/*.js', ['scripts']);

    // 建立即时重整伺服器
    var server = livereload();

    // 监听所有位在 dist/  目录下的档案，一旦有更动，便进行重整
    gulp.watch(['dist/**']).on('change', function(file) {
        server.changed(file.path);
    });

});


