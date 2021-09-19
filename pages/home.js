let homepage = function () {
    let firstInputEle = element(by.model('first'));
    let secondInputEle = element(by.model('second'));
    let goButtonEle = element(by.css('#gobutton'));
    this.enterFirstValue = function (firstValue) {
        firstInputEle.sendKeys(firstValue);
    }
    this.enterSecondValue = function (secondValue) {
        secondInputEle.sendKeys(secondValue);
    }
    this.goClick = function () {
        goButtonEle.click();
    };
    this.verifyTotal = function (result) {
        var outputText = element(by.cssContainingText('.ng-binding', result));
        expect(outputText.getText()).toEqual(result);
    };
    this.get = function (url) {
        browser.get(url);
    }

};
module.exports = new homepage();