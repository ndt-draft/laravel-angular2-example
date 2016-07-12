var elixir = require('laravel-elixir');

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
    // Concat all webpack generated files
    mix.scripts([
        'resources/assets/dist/custom.js',
        'resources/assets/dist/polyfills.js',
        'resources/assets/dist/vendor.js',
        'resources/assets/dist/app.js'
    ], 'public/js/all.js', './');
    mix.version(['js/all.js']);
});
