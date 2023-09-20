class Mesa
{
    //parametros para configurar variaveis internas
    constructor(material,altura,largura,profundidade,pernas,cor)
    {
        //this significa variavel interna da classe
        this.material=material;
        this.altura=altura;
        this.largura=largura;
        this.profundidade=profundidade;
        //this.pernas=pernas;
        this.cor=cor;
    }
    //estes dois metodos são o comportamento da classe
    regularAltura(novaAltura)
    {
        this.altura=novaAltura;
        
    }

    verificarAltura()
    {
        console.log(`Nova altura ${this.altura}`);
    }
}
//defini 2 mesas
const mesa1=new Mesa("madeira",1.0,1.7,0.5,4,"Mogano");
mesa1.regularAltura(1.3);
mesa1.verificarAltura();
const mesa2=new Mesa("ferro",1.0,1.7,0.5,4,"preto");
mesa2.regularAltura(1.5);
mesa2.verificarAltura();