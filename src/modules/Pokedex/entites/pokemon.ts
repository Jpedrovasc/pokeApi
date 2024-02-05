export class Pokemon {
    public name: string;
    public id: string;
    public imagem: string;
    public types: string[];
    public abilities: string[];
    public moves: string[];
    public evolutions: string[];
  
    constructor(data: {
      name: string;
      id: string;
      imagem: string;
      types: string[];
      abilities: string[];
      moves: string[];
      evolutions: string[];
    }) {
      this.name = data.name;
      this.id = data.id;
      this.imagem = data.imagem;
      this.types = data.types;
      this.abilities = data.types;
      this.moves = data.moves;
      this.evolutions = data.evolutions;
    }
  }
  