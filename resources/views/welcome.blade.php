<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>

        <!-- 1. Load libraries -->
         <!-- Polyfill(s) for older browsers -->
        <script src="plugins/core-js/client/shim.min.js"></script>

        <script src="plugins/zone.js/dist/zone.js"></script>
        <script src="plugins/reflect-metadata/Reflect.js"></script>
        <script src="plugins/systemjs/dist/system.src.js"></script>
        <!-- 2. Configure SystemJS and existing js -->
        <script src="js/systemjs.config.js"></script>
        <script>
            System.import('jquery').catch(function(err){ console.error(err); });
            System.import('custom-app').catch(function(err){ console.error(err); });
            System.import('app').catch(function(err){ console.error(err); });
        </script>
    </head>
    <body>
        <my-app>Loading...</my-app>
    </body>
</html>
