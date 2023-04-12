import { DecorationsInterface } from '../Interfaces/Decorations.interface';
import { TankInterFace } from '../Interfaces/Tanks.interface';
import { UserFishInterFace } from '../Interfaces/UserFish.interface';
import { UtilitiesInterface } from '../Interfaces/Utilities.interface';

export class PrebuiltsModel {
  public _id: string;
  public name: string;
  public MainFish: string;
  public tank: {};
  public fish: [];
  public decorations: [];
  public utilities: [];
  public remainingSpace: number;

  constructor(
    _id: string,
    name: string,
    MainFish: string,
    tank: {},
    fish: [],
    decorations: [],
    utilities: [],
    remainingSpace: number
  ) {
    this._id = _id;
    this.name = name;
    this.MainFish = MainFish;
    this.tank = tank;
    this.fish = fish;
    this.decorations = decorations;
    this.utilities = utilities;
    this.remainingSpace = remainingSpace;
  }
}
