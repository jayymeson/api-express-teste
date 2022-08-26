class Product {
  constructor(
    id: string | undefined,
    imagem: string,
    modelo: string,
    tamanhos: string,
    valor: string
  ) {
    this.id = id;
    this.imagem = imagem;
    this.modelo = modelo;
    this.tamanhos = tamanhos;
    this.valor = valor;
  }
}

module.exports = Product;
