export class InformcaoConsultaPokemon {
    public name: string;
    public url: string;
  
    constructor(data: { name: string; url: string }) {
      this.name = data.name;
      this.url = data.url;
    }
  }
  