var elixir = require('laravel-elixir'),
    webpack = require('webpack'),
    webpackMerge = require('webpack-merge');

require('laravel-elixir-remove');
require('laravel-elixir-webpack-ex');

var gutils = require('gulp-util');

var production = gutils.env.production || process.env.NODE_ENV === 'production';

var webpackCommonConfig = {
    resolve: {
        extensions: ['', '.js', '.ts'],
        // https://webpack.github.io/docs/usage-with-bower.html
        modulesDirectories: ["node_modules", "bower_components"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills', 'custom']
        }),

        new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ]
};

var webpackDevConfig = webpackMerge(webpackCommonConfig, {
    devtool: 'cheap-module-eval-source-map'
});

var webpackProdConfig = webpackMerge(webpackCommonConfig, {
    devtool: 'source-map',

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
    ]
});

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.js.browserify.transformers.push({
    name: 'debowerify',
    options: {}
});

elixir(function(mix) {
    mix.remove('./resources/assets/typescript/tsconfig.json');

    if ( production ) {
        mix.remove('./resources/assets/dist');
    }

    mix.webpack({
        'polyfills': './resources/assets/typescript/polyfills.ts',
        'vendor': './resources/assets/typescript/vendor.ts',
        'app': './resources/assets/typescript/main.ts',
        'custom': './resources/assets/js/main.js'
    }, production ? webpackProdConfig : webpackDevConfig, './resources/assets/dist-test', './');

    // Concat all webpack generated files
    mix.scripts([
        'resources/assets/dist-test/custom.js',
        'resources/assets/dist-test/polyfills.js',
        'resources/assets/dist-test/vendor.js',
        'resources/assets/dist-test/app.js'
    ], 'public/js/all.js', './');
    mix.version(['js/all.js']);
});
