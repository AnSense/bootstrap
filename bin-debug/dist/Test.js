define(["require", "exports", "./Application"], function (require, exports, Application_1) {
    "use strict";
    exports.__esModule = true;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.prototype.test = function (target) {
            var o = Application_1.Application.getJQueryObject(target.getID());
            o.button("dispose");
            console.log(this, target);
        };
        return Test;
    }());
    exports.Test = Test;
});
