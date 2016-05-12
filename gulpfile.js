'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssReporter = require('postcss-reporter');
const stylelint = require('stylelint');
const lessSyntax = require('postcss-less');

const lintFiles = postcss([ stylelint, postcssReporter({ clearMessages: true, }), ], { syntax: lessSyntax, });
gulp.task('default', () =>
    gulp.src('**/*.less')
        .pipe(lintFiles));
