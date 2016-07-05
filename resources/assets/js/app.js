var App = function () {
    var handleHeader = function () {
        console.log('init header');
        alert('init header');
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

module.exports = App;
