class Cidade
{
    constructor(nome,população)
    {
        this.nome=nome;
        this.população=população;
    }
    exibirDetalhes()
    {
        console.log(`A cidade ${this.nome} tem a população de ${this.população}`)
        
    }
}
const cidade1=new Cidade("Nova York", "8,4 milhões");
cidade1.exibirDetalhes();

function criarCidade(nome, população) {
    return {
      Nome: nome,
      População: população,
      exibirDetalhes() {
        console.log(`A cidade ${this.Nome} tem a população de ${this.População}`);
      },
    };
  }
const cidade2 = criarCidade("Paris", "2,2 milhões");
cidade2.exibirDetalhes();

const cidadeProto = {
    exibirDetalhes() {
      console.log(`A cidade ${this.nome} tem a população de ${this.população}`);
    },
  };
  
  const cidade3 = Object.create(cidadeProto);
  cidade3.nome = "Tóquio";
  cidade3.população = "13,9 milhões";
  cidade3.exibirDetalhes();