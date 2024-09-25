export default class ContaBancaria {
    private numeroConta: number;
    private agencia: number;
    private saldo: number;
    private extrato: string[];

    constructor(numeroConta: number, agencia: number) {
        this.numeroConta = numeroConta;
        this.agencia = agencia;
        this.saldo = 0;
        this.extrato = [];
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            this.registrarOperacao(`Depósito no valor de R$${valor}`);
        } else {
            console.log('Valor de depósito inválido.');
        }
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            this.registrarOperacao(`Saque no valor de R$${valor}`);
        } else {
            console.log('Saque inválido.');
        }
    }

    transferir(valor: number, contaDestino: ContaBancaria): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            contaDestino.depositar(valor);
            this.registrarOperacao(`Transferência de R$${valor} para conta ${contaDestino.numeroConta}`);
        } else {
            console.log('Transferência inválida.');
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    exibirExtrato(): void {
        if (this.extrato.length === 0) {
            console.log('Nenhuma operação realizada.');
        } else {
            console.log('Extrato da conta:');
            this.extrato.forEach((operacao) => console.log(operacao));
        }
    }
    private registrarOperacao(descricao: string): void {
        const data = new Date().toLocaleString();
        this.extrato.push(`${data}: ${descricao}`);
    }
}
