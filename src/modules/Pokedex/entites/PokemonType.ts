export class PokemonType {
    public name: string;
    public url: string;
    public types: PokemonType[]; 
    constructor(data: { name: string; url: string; types: PokemonType[] }) {
      this.name = data.name;
      this.url = data.url;
      this.types = data.types; 
    }
  }
  

  export interface PokemonType {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  