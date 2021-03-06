"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Pane = (function (_super) {
    __extends(Pane, _super);
    function Pane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pane.prototype.render = function () {
        var _a = this.props, hasDetailPane = _a.hasDetailPane, id = _a.id, style = _a.style, position = _a.position, className = _a.className;
        var isDetailPane = hasDetailPane ? 'bottom-detail-pane' : '';
        return (React.createElement("div", { id: id, className: "pane " + position + " " + isDetailPane + " " + (className || ''), style: style }, this.props.children));
    };
    return Pane;
}(React.Component));
exports.default = Pane;
