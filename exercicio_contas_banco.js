//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (){
    if (this.saldo < valor) {
        console.log("Saldo insuficiente.")
        this.verSaldo();
        return;
    } 
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function (){
    console.log(`Ag/c: ${this.agencia}/${this.conta} ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

