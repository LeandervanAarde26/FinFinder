export class UtilityModel {
    public name: string;
    public imagePath: string;
    public spaceTaken: number;
    public quantity: number;
    public forTankSize: number;
    public category: string[];

    constructor(name: string, imagePath: string, quantity: number, takenSpace: number,forTankSize: number, category: string[]) {
        this.name = name;
        this.imagePath = imagePath;
        this.quantity = quantity;
        this.spaceTaken = takenSpace;
        this.forTankSize = forTankSize;
        this.category = category;
    }
}