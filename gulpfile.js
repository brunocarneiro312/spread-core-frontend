(function () {

    'use strict';

    var gulp        = require('gulp');
    var concat      = require('gulp-concat');
    var less        = require('gulp-less');
    var order       = require('gulp-order');
    var browserSync = require('browser-sync').create();
    var reload      = browserSync.reload;

    /**
     * -------
     * default
     * -------
     */
    gulp.task('default', [
        'compile.css',
        'vendor.css',
        'pack.vendor',
        'pack.app.modules',
        'pack.app.services',
        'pack.app.filters',
        'pack.app.directives',
        'pack.app.controllers',
        'pack.view',
        'serve',
        'watch'
    ]);

    /**
     * -----------
     * compile.css
     * -----------
     */
    gulp.task('compile.css', function() {
        gulp.src('./app/styles/**/*.css')
            .pipe(concat('style.css'))
            .pipe(gulp.dest('./public/styles/'));
    });

    /**
     * ----------
     * vendor.css
     * ----------
     */
    gulp.task('vendor.css', function() {
        gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/font-awesome/css/font-awesome.css'
        ])
            .pipe(concat('vendor.css'))
            .pipe(gulp.dest('./public/styles/'))
    });

    /**
     * --------
     * pack.app
     * --------
     */
    gulp.task('pack.app', function() {
        gulp.src('./app/**/*.js')
            .pipe(concat('app.js'))
            .pipe(order([
                'app/components/overlay/overlay.module.js',
                'app/components/overlay/**/*.js',
                'app/app.module.js'
            ]))
            .pipe(gulp.dest('./public/scripts/'));
    });

    /**
     * -----------
     * pack.vendor
     * -----------
     */
    gulp.task('pack.vendor', function() {
        gulp.src([
            './node_modules/angular/angular.js',
            './node_modules/angular-route/angular-route.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/bootstrap/dist/bootstrap.js',
            './node_modules/jquery/dist/jquery.js',
        ])
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest('./public/scripts/'));

        gulp.src('./node_modules/font-awesome/fonts/**')
            .pipe(gulp.dest('./public/fonts/'));
    });

    /**
     * ---------
     * pack.view
     * ---------
     */
    gulp.task('pack.view', function() {

        /** inicio */
        gulp.src('app/views/inicio.html')
            .pipe(gulp.dest('./public/views/'));

        /** componentes */
        gulp.src('app/views/componentes.html')
            .pipe(gulp.dest('./public/views/'));

        /** interfaces */
        gulp.src('app/views/interfaces.html')
            .pipe(gulp.dest('./public/views/'));

        /** accordion */
        gulp.src('app/components/accordion/views/accordion.html')
            .pipe(gulp.dest('./public/views/'));

        /** overlay */
        gulp.src('app/components/overlay/views/overlay.html')
            .pipe(gulp.dest('./public/views/'));

        /** css */
        gulp.src('app/components/**/*.css')
            .pipe(concat('styles.css'))
            .pipe(gulp.dest('./public/views/'));
    });

    /**
     * ------
     * reload
     * ------
     */
    gulp.task('reload', function () {
        reload
    })

    /**
     * -----
     * serve
     * -----
     */
    gulp.task('serve', function() {
        browserSync.init({
            server: {
                baseDir: './public'
            }
        });
    });

    /**
     * -----
     * watch
     * -----
     */
    gulp.task('watch', function() {
        gulp.watch([
            '**/*.html',
            'app/**/*.js',
            'app/**/*.css'
        ], [
            'compile.css',
            'pack.app.modules',
            'pack.app.services',
            'pack.app.filters',
            'pack.app.directives',
            'pack.app.controllers',
            'pack.view',
            reload
        ]);
    });

    /**
     * ----------------
     * pack.app.modules
     * ----------------
     */
    gulp.task('pack.app.modules', function() {
        gulp.src('app/**/*.module.js')
            .pipe(concat('modules.js'))
            .pipe(gulp.dest('./public'));
    });

    /**
     * -----------------
     * pack.app.services
     * -----------------
     */
    gulp.task('pack.app.services', function() {
        gulp.src('app/components/**/*.service.js')
            .pipe(concat('services.js'))
            .pipe(gulp.dest('./public'));
    });

    /**
     * ----------------
     * pack.app.filters
     * ----------------
     */
    gulp.task('pack.app.filters', function() {
        gulp.src('app/components/**/*.filter.js')
            .pipe(concat('filters.js'))
            .pipe(gulp.dest('./public'));
    });

    /**
     * -------------------
     * pack.app.directives
     * -------------------
     */
    gulp.task('pack.app.directives', function() {
        gulp.src('app/components/**/*.directive.js')
            .pipe(concat('directives.js'))
            .pipe(gulp.dest('./public'));
    });

    /**
     * --------------------
     * pack.app.controllers
     * --------------------
     */
    gulp.task('pack.app.controllers', function() {
        gulp.src('app/components/**/*.controller.js')
            .pipe(concat('controllers.js'))
            .pipe(gulp.dest('./public'));
    });

})();