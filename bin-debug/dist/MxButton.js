var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./UIComponent", "./Application"], function (require, exports, UIComponent_1, Application_1) {
    "use strict";
    exports.__esModule = true;
    var MxButton = /** @class */ (function (_super) {
        __extends(MxButton, _super);
        function MxButton() {
            return _super.call(this, "button", "btn btn-primary") || this;
        }
        MxButton.prototype.createChildren = function () {
            this.element.setAttribute("type", "button");
            Application_1.Application.addEventListener(this, this.id, "click", this.clickHandler);
        };
        MxButton.prototype.clickHandler = function () {
            if (this.clickData != null) {
                this.clickData.listener.call(this.clickData.$this, this);
            }
        };
        MxButton.prototype.onClick = function ($this, func) {
            this.clickData = { $this: $this, listener: func };
        };
        MxButton.prototype.setLabel = function (label) {
            this.element.innerText = label;
        };
        return MxButton;
    }(UIComponent_1.UIComponent));
    exports.MxButton = MxButton;
});
