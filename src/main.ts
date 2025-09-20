import * as readline from "readline";
import { Soma } from "./Soma";
import { Subtracao } from "./Subtracao";
import { Divisao } from "./Divisao";
import { Potencia } from "./Potencia";
import { Radiciacao } from "./Radiciacao";
import { Bhaskara } from "./Bhaskara";

const rl = readline.createInterface({
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
    rl.question("Escolha uma opção: ", (op) => {
        if (op === "0") {
            console.log("Encerrando...");
            rl.close();
            return;
        }

        if (op === "6") {
            rl.question("Digite a: ", (a) => {
                rl.question("Digite b: ", (b) => {
                    rl.question("Digite c: ", (c) => {
                        const bhaskara = new Bhaskara();
                        console.log(bhaskara.calcular(Number(a), Number(b), Number(c)));
                        executar();
                    });
                });
            });
        } else {
            rl.question("Digite o primeiro número: ", (n1) => {
                rl.question("Digite o segundo número: ", (n2) => {
                    const x = Number(n1);
                    const y = Number(n2);

                    try {
                        let resultado: number | string = "";

                        switch (op) {
                            case "1": resultado = new Soma().calcular(x, y); break;
                            case "2": resultado = new Subtracao().calcular(x, y); break;
                            case "3": resultado = new Divisao().calcular(x, y); break;
                            case "4": resultado = new Potencia().calcular(x, y); break;
                            case "5": resultado = new Radiciacao().calcular(x, y); break;
                            default: resultado = "Opção inválida!";
                        }

                        console.log("Resultado:", resultado);
                    } catch (e: any) {
                        console.log("Erro:", e.message);
                    }

                    executar();
                });
            });
        }
    });
}

executar();
