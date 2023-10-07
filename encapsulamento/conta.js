class ContaBancaria {
    #saldo;
    #titular;
    constructor(titular){
      this.#titular=titular;
      this.#saldo=0;
    }
    getSaldo(){
      return this.#saldo;
    }
    setSaldo(novoSaldo) {
      if (novoSaldo >= 0) {
        this.#saldo = novoSaldo;
      } else {
        console.log("O saldo não pode ser um valor negativo.");
      }
    }
    getTitular(){
      return this.#titular;
    }
    depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
    sacar(valor) {
      if (valor > 0 && valor <= this.#saldo) {
        this.#saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso.`);
      } else {
        console.log("Saldo insuficiente ou valor de saque inválido.");
      }
    }
    transferir(destino, valor) {
      if (valor > 0 && valor <= this.#saldo) {
        this.#saldo -= valor;
        destino.depositar(valor);
        console.log(`Transferência de R$${valor} para ${destino.getTitular()} realizada com sucesso.`);
      } else {
        console.log("Saldo insuficiente ou valor de transferência inválido.");
      }
    }
}
const minhaConta = new ContaBancaria("João");
console.log(`Saldo Inicial de ${minhaConta.getTitular()}: R$${minhaConta.getSaldo()}`);

minhaConta.depositar(1000);
console.log(`Saldo após depósito: R$${minhaConta.getSaldo()}`);

minhaConta.sacar(500);
console.log(`Saldo após saque: R$${minhaConta.getSaldo()}`);

const outraConta = new ContaBancaria("Maria");
minhaConta.transferir(outraConta, 200);
console.log(`Saldo após transferência: R$${minhaConta.getSaldo()}`);
console.log(`Saldo da conta de ${outraConta.getTitular()}: R$${outraConta.getSaldo()}`);