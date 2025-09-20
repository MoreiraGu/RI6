import { Operacao } from "./Operacao";

export class Soma extends Operacao {
    calcular(x: number, y: number): number {
        return x + y;
    }
}