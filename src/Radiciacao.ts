import { Operacao } from "./Operacao";

export class Radiciacao extends Operacao {
    calcular(x: number, y: number): number {
        if (y === 0) {
            throw new Error("Índice da raiz não pode ser zero!");
        }
        return Math.pow(x, 1 / y);
    }
}
