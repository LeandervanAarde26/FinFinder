import { DecorationsInterface } from '../Interfaces/Decorations.interface';
import { UserFishInterFace } from '../Interfaces/UserFish.interface';
import { UtilitiesInterface } from '../Interfaces/Utilities.interface';

export class LocationModel {
  public id: string;
  public tankSize: number;
  public locationName: string;
  public address: string;
  public occuppied: UserFishInterFace[];
  public decor: DecorationsInterface[];
  public utilities: UtilitiesInterface[];
  public remainingSpace: number;

  constructor(
    id: string,
    tankSize: number,
    locationName: string,
    address: string,
    occuppied: UserFishInterFace[],
    decor: DecorationsInterface[],
    utilities: UtilitiesInterface[],
    remainingSpace: number
  ) {
    this.id = id;
    this.tankSize = tankSize;
    this.locationName = locationName;
    this.address = address;
    this.occuppied = occuppied;
    this.decor = decor;
    this.utilities = utilities;
    this.remainingSpace = remainingSpace;
  }
}
