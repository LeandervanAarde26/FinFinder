export class DecorModel {
   public name: string;
   public imagePath: string;
   public quantity: number;
   public takenSpace: number;
   public category: string[];

    constructor(name: string, imagePath: string, quantity: number, takenSpace: number, category: string[]) {
        this.name = name;
        this.imagePath = imagePath;
        this.quantity = quantity;
        this.takenSpace = takenSpace;
        this.category = category;
    }
}