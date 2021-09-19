var homepage = require('../pages/home');
describe('demo cal tests', function () {
    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstValue(20);
        homepage.enterSecondValue(70);
        homepage.goClick();
        homepage.verifyTotal('90');
        browser.sleep(6000);
    });
    it('substraction test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstValue(20);
        homepage.enterSecondValue(70);
        homepage.goClick1();
        homepage.verifyTotal('90');
        browser.sleep(6000);
    });
    it('multiplication test', function () {

    });
    it('division test', function () {

    });
});