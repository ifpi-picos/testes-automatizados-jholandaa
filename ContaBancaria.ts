export default class ContaBancaria {
    private numeroConta: number
    private agencia: number
    private saldo: number = 0
    private extrato: string[]
    
    constructor(){
        this.numeroConta = 0
        this.agencia = 1
        this.saldo = 0
        this.extrato = []

    }
}
