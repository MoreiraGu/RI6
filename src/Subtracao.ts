import { Operacao } from "./Operacao";

export class Subtracao extends Operacao {
    calcular(x: number, y: number): number {
        return x - y;
    }
}