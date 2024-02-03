import { PokemonType } from '../entites/PokemonType';
import { PokemonMove } from '../entites/PokemonMove';
import { PokemonAbility } from '../entites/PokemonAbilities';

export class InformacaoGeralPokemon {
  public name: string;
  public abilities: PokemonAbility[];
  public base_experience: string;
  public forms: string[];
  public game_indices: string;
  public height: string;
  public held_items: string[];
  public id: string;
  public is_default: boolean;
  public location_area_encounters: string;
  public moves: PokemonMove[];
  public order: string;
  public past_abilities: string[];
  public past_types: string[];
  public species: string;
  public sprites: string;
  public other: string;
  public home: string;
  public showdown: string;
  public versions: string;
  public stats: string;
  public types: PokemonType[];
  public weight: string;

  constructor(data: {
    name: string;
    abilities: PokemonAbility[];
    base_experience: string;
    forms: string[];
    game_indices: string;
    height: string;
    held_items: string[];
    id: string;
    is_default: boolean;
    location_area_encounters: string;
    moves: PokemonMove[];
    order: string;
    past_abilities: string[];
    past_types: string[];
    species: string;
    sprites: string;
    other: string;
    home: string;
    showdown: string;
    versions: string;
    stats: string;
    types: PokemonType[];
    weight: string;
  }) {
    this.name = data.name;
    this.abilities = data.abilities;
    this.base_experience = data.base_experience;
    this.forms = data.forms;
    this.game_indices = data.game_indices;
    this.height = data.height;
    this.held_items = data.held_items;
    this.id = data.id;
    this.is_default = data.is_default;
    this.location_area_encounters = data.location_area_encounters;
    this.moves = data.moves;
    this.order = data.order;
    this.past_abilities = data.past_abilities;
    this.past_types = data.past_types;
    this.species = data.species;
    this.sprites = data.sprites;
    this.other = data.other;
    this.home = data.home;
    this.showdown = data.showdown;
    this.versions = data.versions;
    this.stats = data.stats;
    this.types = data.types;
    this.weight = data.weight;
  }
}
