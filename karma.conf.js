// Karma configuration
// Generated on Mon May 09 2016 20:53:35 GMT+0200 (CEST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            {pattern: 'node_modules/es6-shim/es-shim.js', included: true, watched: false},
            {pattern: 'node_modules/es6-promise/es6-promise.js', included:true, watched:false},
            {pattern: 'node_modules/zone.js/dist/zone.js', included:true, watched:false},
            {pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js', included:true, watched:false},
            {pattern: 'node_modules/zone.js/dist/async-test.js', included:true, watched:false},
            {pattern: 'node_modules/zone.js/dist/jasmine-patch.js', included:true, watched:false},
            {pattern: 'node_modules/reflect-metadata/Reflect.js', include: true, watched:false},
            {pattern: 'node_modules/rxjs/**', include:true, watched:false},
            {pattern: 'node_modules/angular2/**/*.js', include:true, watched:false},
            {pattern: 'app/**/*.test.js', include:true, watched:false}
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.test.ts': ['webpack', 'sourcemap']
        },

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['', '.js', '.ts','.css','.html']
            },
            module: {
                loaders: [
                    {test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/},
                    {test: /\.html$/, loader:'raw-loader', exclude: /node_modules/},
                    {test: /\.css$/, loader:'style!css', exclude: /node_modules/}
                ]
            },
            stats: { colors: true, reasons: true },
            debug: false
        },

        webpackMiddleware: {
            noInfo: true //please don't spam the console when running in karma!
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
