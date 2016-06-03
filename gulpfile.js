var elixir = require('laravel-elixir');

require('elixir-typescript');

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

var typescriptOptions = {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
};

elixir(function(mix) {
    mix.copy( 'node_modules/core-js', 'public/plugins/core-js' );
    mix.copy( 'node_modules/@angular', 'public/plugins/@angular' );
    mix.copy( 'node_modules/angular2-in-memory-web-api', 'public/plugins/angular2-in-memory-web-api' );
    mix.copy( 'node_modules/rxjs', 'public/plugins/rxjs' );
    mix.copy( 'node_modules/reflect-metadata', 'public/plugins/reflect-metadata' );
    mix.copy( 'node_modules/zone.js/', 'public/plugins/zone.js/' );
    mix.copy( 'node_modules/systemjs', 'public/plugins/systemjs' );
    mix.copy( 'node_modules/systemjs-plugin-css', 'public/plugins/systemjs-plugin-css' );

    mix.copy( 'bower_components', 'public/plugins' );

    mix.copy( 'resources/assets/js/systemjs.config.js', 'public/js' );

    mix.scripts( [
        'resources/assets/js/app.js',
        'resources/assets/js/layout.js'
    ], 'public/js/app.js', './' );

    mix.typescript( 'app.component.js', 'public/app', '/**/app.component.ts', typescriptOptions );
    mix.typescript( 'myNgInclude.component.js', 'public/app', '/**/myNgInclude.component.ts', typescriptOptions );
    mix.typescript( 'dashboard.js', 'public/app', '/**/dashboard.ts', typescriptOptions );
    mix.typescript( 'main.js', 'public/app', '/**/main.ts', typescriptOptions );
});
