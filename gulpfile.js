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

var typescriptOptions = [
    {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
    },
    {
        "target": "es5",
        "module": "system",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
        "outFile": "main.js"
    }
];

elixir(function(mix) {
    mix.copy( 'node_modules/core-js', 'public/plugins/core-js' );
    mix.copy( 'node_modules/@angular', 'public/plugins/@angular' );
    mix.copy( 'node_modules/angular2-in-memory-web-api', 'public/plugins/angular2-in-memory-web-api' );
    mix.copy( 'node_modules/rxjs', 'public/plugins/rxjs' );
    mix.copy( 'node_modules/reflect-metadata', 'public/plugins/reflect-metadata' );
    mix.copy( 'node_modules/zone.js/', 'public/plugins/zone.js/' );
    mix.copy( 'node_modules/systemjs', 'public/plugins/systemjs' );

    mix.copy( 'bower_components', 'public/plugins' );

    mix.copy( 'resources/assets/js/systemjs.config.js', 'public/js' );

    mix.scripts( [
        'resources/assets/js/app.js',
        'resources/assets/js/layout.js'
    ], 'public/js/app.js', './' );

    mix.typescript( '/**/*.ts', 'resources/assets/typescript/dist1/main.js', typescriptOptions[0] );
    // comment out concat of elixir-typescript, uncomment this line and comment the line above
    // mix.typescript( '/**/*.ts', 'resources/assets/typescript/dist2/main.js', typescriptOptions[0] );

    // mix.typescript( '/**/*.ts', 'resources/assets/typescript/dist3/main.js', typescriptOptions[1] );
});
