function Mesa(material,altura,largura,profundidade)
{
    this.material=material;
    this.altura=altura;
    this.largura=largura;
    this.profundidade=profundidade;
}

Mesa.prototype.perna=1;
const mesa1 = new Mesa("aço",1.0,1.5,1.8);
const mesa2 = new Mesa("madeira",0.5,1.0,1.0);
mesa2.perna=4;
console.log(mesa1.perna);
console.log(mesa2.perna);
Mesa.prototype.info=function()
{
    console.log(this.material,this.perna);
}
mesa1.info();
mesa2.info();

