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
    mix.browserify('main.js', 'resources/assets/dist');
    mix.scripts([
        'resources/assets/dist/main.js',
        'resources/assets/dist/polyfills.js',
        'resources/assets/dist/vendor.js',
        'resources/assets/dist/app.js'
    ], 'public/js/all.js', './');
    mix.version(['js/all.js']);
});
