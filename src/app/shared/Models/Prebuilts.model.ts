import { DecorationsInterface } from "../Interfaces/Decorations.interface";
import { TankInterFace } from "../Interfaces/Tanks.interface";
import { UserFishInterFace } from "../Interfaces/UserFish.interface";
import { UtilitiesInterface } from "../Interfaces/Utilities.interface";

export class Prebuilts {
    public tank: TankInterFace[];
    public imagePath: string;
    public occupied: UserFishInterFace[];
    public decor: DecorationsInterface[];
    public utilities: UtilitiesInterface[];
    public remainingSpace: number

    constructor(tank: TankInterFace[], imagePath: string, occupied: UserFishInterFace[], decor: DecorationsInterface[], utilities:  UtilitiesInterface[], remainingSpace: number) {
        this.tank = tank;
        this.imagePath = imagePath;
        this.occupied = occupied;
        this.decor = decor;
        this.utilities = utilities;
        this.remainingSpace = remainingSpace;
    }
}