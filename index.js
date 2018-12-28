var page = require('webpage').create();
page.onLoadFinished = function () {
    page.render('almanac.png');
    phantom.exit();
};

page.open('almanac.html', function () {
});