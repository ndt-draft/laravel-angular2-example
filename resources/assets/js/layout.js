var Layout = function () {
    var handleBaseLayout = function () {
        console.log('init base layout');
    };

    return {
        initBody: function () {
            console.log($('body'));
        },
        initBaseLayout: function () {
            handleBaseLayout();
        },
        init: function () {
            this.initBaseLayout();
        }
    }
}();
