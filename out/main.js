"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var Soma_1 = require("./Soma");
var Subtracao_1 = require("./Subtracao");
var Divisao_1 = require("./Divisao");
var Potencia_1 = require("./Potencia");
var Radiciacao_1 = require("./Radiciacao");
var Bhaskara_1 = require("./Bhaskara");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function menu() {
    console.log("\n=== Calculadora ===");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Divisão");
    console.log("4 - Potenciação");
    console.log("5 - Radiciação");
    console.log("6 - Bhaskara (2º grau)");
    console.log("0 - Sair");
}
function executar() {
    menu();
    rl.question("Escolha uma opção: ", function (op) {
        if (op === "0") {
            console.log("Encerrando...");
            rl.close();
            return;
        }
        if (op === "6") {
            rl.question("Digite a: ", function (a) {
                rl.question("Digite b: ", function (b) {
                    rl.question("Digite c: ", function (c) {
                        var bhaskara = new Bhaskara_1.Bhaskara();
                        console.log(bhaskara.calcular(Number(a), Number(b), Number(c)));
                        executar();
                    });
                });
            });
        }
        else {
            rl.question("Digite o primeiro número: ", function (n1) {
                rl.question("Digite o segundo número: ", function (n2) {
                    var x = Number(n1);
                    var y = Number(n2);
                    try {
                        var resultado = "";
                        switch (op) {
                            case "1":
                                resultado = new Soma_1.Soma().calcular(x, y);
                                break;
                            case "2":
                                resultado = new Subtracao_1.Subtracao().calcular(x, y);
                                break;
                            case "3":
                                resultado = new Divisao_1.Divisao().calcular(x, y);
                                break;
                            case "4":
                                resultado = new Potencia_1.Potencia().calcular(x, y);
                                break;
                            case "5":
                                resultado = new Radiciacao_1.Radiciacao().calcular(x, y);
                                break;
                            default: resultado = "Opção inválida!";
                        }
                        console.log("Resultado:", resultado);
                    }
                    catch (e) {
                        console.log("Erro:", e.message);
                    }
                    executar();
                });
            });
        }
    });
}
executar();
