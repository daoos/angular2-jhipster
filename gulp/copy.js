'use strict';

var gulp = require('gulp'),
    rev = require('gulp-rev'),
    plumber = require('gulp-plumber'),
    es = require('event-stream'),
    flatten = require('gulp-flatten'),
    changed = require('gulp-changed');

var handleErrors = require('./handleErrors');
var config = require('./config');

module.exports = {
    html: html,
    fonts: fonts,
    common: common,
    deps: deps
}

function html() {
    return gulp.src([config.app + '/**/*.html', '!' + config.bower + '/**'])
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(changed(config.dist))
        .pipe(gulp.dest(config.dist));
}

function fonts() {
    return es.merge(
        gulp.src(config.app + 'content/**/*.{woff,woff2,svg,ttf,eot,otf}')
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(changed(config.dist + 'content/fonts/'))
        .pipe(flatten())
        .pipe(rev())
        .pipe(gulp.dest(config.dist + 'content/fonts/'))
        .pipe(rev.manifest(config.revManifest, {
            base: config.dist,
            merge: true
        }))
        .pipe(gulp.dest(config.dist))
    );
}

function common() {
    return gulp.src([config.app + 'robots.txt', config.app + 'favicon.ico', config.app + '.htaccess'], { dot: true })
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(changed(config.dist))
        .pipe(gulp.dest(config.dist));
}

//copy npm dependencies to vendor folder
//TODO optimize to copy only required minified files
function deps(){
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/@angular/**/*.js',
        'node_modules/rxjs/**/*.js'
    ], { base: 'node_modules' })
    .pipe(gulp.dest(config.dist + 'vendor'));
}
