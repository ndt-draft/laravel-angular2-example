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

elixir(function(mix) {
    mix.scripts([
        // JS vendor
        'bower_components/jquery/dist/jquery.min.js',
        // JS app
        'resources/assets/js/app.js',
        'resources/assets/js/layout.js',
        // Webpack vendor and app
        'resources/assets/dist/polyfills.js',
        'resources/assets/dist/vendor.js',
        'resources/assets/dist/app.js'
    ], 'public/js/all.js', './');
    mix.version(['js/all.js']);
});
