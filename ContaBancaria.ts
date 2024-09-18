export default class ContaBancaria {
    private numeroConta: number
    private agencia: number
    private saldo: number = 0
    private extrato: string[]

    constructor() {
        this.numeroConta = 0
        this.agencia = 0
        this.saldo = 0
        this.extrato = []

    }
    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            this.registrarOperacao(`Depósito no valor de R$${valor}`);
        } else {
            console.log('Valor de depósito inválido.')
        }
    }
    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        this.registrarOperacao(`'Saque realizado de R$${valor}`)
        } else {
            console.log('Saque inválido.')
        }
    }