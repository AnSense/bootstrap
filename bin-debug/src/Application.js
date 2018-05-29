define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Application = /** @class */ (function () {
        function Application() {
        }
        Application.createElement = function (tagName, className) {
            Application.ElementID++;
            var ele = document.createElement(tagName);
            ele.className = className;
            ele.id = "ElementID_" + Application.ElementID.toString();
            return ele;
        };
        Application.addEventListener = function ($this, id, event, listener) {
            $(document).on(event, "#" + id, function (e) {
                e.stopPropagation();
                listener.call($this);
            });
        };
        Application.getJQueryObject = function (id) {
            return $("#" + id);
        };
        Application.ElementID = 0;
        return Application;
    }());
    exports.Application = Application;
});
