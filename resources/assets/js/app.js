var App = function () {
    var handleHeader = function () {
        console.log('init header');
    };

    var handleFooter = function () {
        console.log('init footer');
    };

    return {
        initHeader: function () {
            handleHeader();
        },
        initFooter: function () {
            handleFooter();
        },
        init: function () {
            initHeader();
            initFooter();
        }
    }
}();
