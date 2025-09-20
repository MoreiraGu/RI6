import { Operacao } from "./Operacao";

export class Potencia extends Operacao {
    calcular(x: number, y: number): number {
        return Math.pow(x, y);
    }
}