define(["require", "exports", "./Application"], function (require, exports, Application_1) {
    "use strict";
    exports.__esModule = true;
    var UIComponent = /** @class */ (function () {
        function UIComponent(tagName, className) {
            this.element = Application_1.Application.createElement(tagName, className);
            this.id = this.element.id;
            this.createChildren();
        }
        UIComponent.prototype.createChildren = function () {
        };
        UIComponent.prototype.update = function () {
        };
        UIComponent.prototype.getElement = function () {
            return this.element;
        };
        UIComponent.prototype.getID = function () {
            return this.id;
        };
        return UIComponent;
    }());
    exports.UIComponent = UIComponent;
});
