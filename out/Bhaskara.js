"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bhaskara = void 0;
var Bhaskara = /** @class */ (function () {
    function Bhaskara() {
    }
    Bhaskara.prototype.calcular = function (a, b, c) {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            return "Não existem raízes reais.";
        }
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "x1 = ".concat(x1, ", x2 = ").concat(x2);
    };
    return Bhaskara;
}());
exports.Bhaskara = Bhaskara;
