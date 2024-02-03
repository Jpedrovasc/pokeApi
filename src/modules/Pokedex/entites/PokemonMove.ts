export class PokemonMove {
    public move: {
      name: string;
      url: string;
    };
    public version_group_details: PokemonMove[];
    
    constructor(data: { move: { name: string; url: string }; version_group_details: PokemonMove[] }) {
      this.move = data.move;
      this.version_group_details = data.version_group_details;
    }
  }
  
  export interface PokemonMove {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }
  