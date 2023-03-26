export class DecorModel {
   public name: string;
   public imagePath: string;
   public takenSpace: number;
   public category: string[];

    constructor(name: string, imagePath: string, takenSpace: number, category: string[]) {
        this.name = name;
        this.imagePath = imagePath;
        this.takenSpace = takenSpace;
        this.category = category;
    }
}