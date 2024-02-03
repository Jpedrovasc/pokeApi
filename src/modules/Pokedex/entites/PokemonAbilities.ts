export class PokemonAbility {
  public abilities: Ability[];
  ability: any;

  constructor(data: { abilities: Ability[] }) {
    this.abilities = data.abilities.map((abilityData) => new Ability(abilityData));
  }
}

export class Ability {
  public ability: {
    name: string;
    url: string;
  };
  public is_hidden: boolean;
  public slot: number;

  constructor(data: { ability: { name: string; url: string }; is_hidden: boolean; slot: number }) {
    this.ability = data.ability;
    this.is_hidden = data.is_hidden;
    this.slot = data.slot;
  }
}
