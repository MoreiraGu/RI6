import { Operacao } from "./Operacao";

export class Divisao extends Operacao {
    calcular(x: number, y: number): number {
        if (y === 0) {
            throw new Error("Não é possível dividir por zero!");
        }
        return x / y;
    }
}