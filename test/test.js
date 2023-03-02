console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');
const logs = [];

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }
        let myExecutor
        try {
            myExecutor = appModule.__get__("myExecutor");
        } catch (e) {
            expect(true, 'Did you create `myExecutor()`?').to.equal(false);
        }
        expect(myExecutor, "`myExecutor()` should be a function.").to.be.an.instanceOf(Function);
        const resolve = (value) => logs.push(value);
        const reject = (value) => logs.push(value);
        let resolvedValue = 'Sunglasses order processed.'
        let rejectValue = 'That item is sold out.'
        let test1 = myExecutor(resolve, reject);
        expect(logs[0]===resolvedValue, "Check the logic of your `myExecutor()` function. If the `sunglasses` property is greater than zero, `resolve()` should be invoked with `'Sunglasses order processed.'` Double check your spelling and punctuation.").to.equal(true)

       let inventory = appModule.__get__("inventory");
      inventory.sunglasses = 0
        let test2 = myExecutor(resolve, reject);

        expect(logs[1]===rejectValue, "Check the logic of your `myExecutor()` function. If the `sunglasses` property is zero, `reject()` should be invoked with `'That item is sold out.'` Double check your spelling and punctuation.").to.equal(true)
    });
});
