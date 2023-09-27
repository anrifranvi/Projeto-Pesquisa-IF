class Produto
{
    constructor(nome,preço)
    {
        this.nome=nome;
        this.preço=preço;
    }
    exibirDetalhes()
    {
        console.log(`${this.nome} por: R$:${this.preço}`)
        
    }
}
const produto1=new Produto("Celular",999);
produto1.exibirDetalhes();

function criarProduto(nome, preço) {
    return {
      Nome: nome,
      Preço: preço,
      exibirDetalhes() {
        console.log(`${this.Nome} por: R$:${this.Preço}`);
      },
    };
  }
const produto2 = criarProduto("Notebook", 1499);
produto2.exibirDetalhes();

const produtoProto = {
    exibirDetalhes() {
      console.log(`${this.nome} por: R$:${this.preço}`);
    },
  };
  
  const produto3 = Object.create(produtoProto);
  produto3.nome = "Fone de Ouvido";
  produto3.preço = 99;
  produto3.exibirDetalhes();