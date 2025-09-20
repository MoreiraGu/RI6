"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radiciacao = void 0;
var Operacao_1 = require("./Operacao");
var Radiciacao = /** @class */ (function (_super) {
    __extends(Radiciacao, _super);
    function Radiciacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radiciacao.prototype.calcular = function (x, y) {
        if (y === 0) {
            throw new Error("Índice da raiz não pode ser zero!");
        }
        return Math.pow(x, 1 / y);
    };
    return Radiciacao;
}(Operacao_1.Operacao));
exports.Radiciacao = Radiciacao;
