/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'plugins/@angular',
    'angular2-in-memory-web-api': 'plugins/angular2-in-memory-web-api',
    'rxjs':                       'plugins/rxjs',
    'jquery':                     'plugins/jquery/dist',
    'custom-app':                 'js',
    'select2':                    'plugins/select2/dist',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'jquery':                     { main: 'jquery.js', defaultExtension: 'js' },
    'custom-app':                 { main: 'app.js', defaultExtension: 'js' },
    'select2/css':                { main: 'select2.css', defaultExtension: 'css' },
    'select2/js':                 { main: 'select2.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
