export class Pokemon {
    public name: string;
    public id: string;
    public imagem: string;
    public types: string[];

  
    constructor(data: {
      name: string;
      id: string;
      imagem: string;
      types: string[];
    }) {
      this.name = data.name;
      this.id = data.id;
      this.imagem = data.imagem;
      this.types = data.types;
    }
  }
  