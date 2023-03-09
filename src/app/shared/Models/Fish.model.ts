export class FishModel {
   public id: string;
   public name: string;
   public imagePath: string;
   public temprature: number;
   public diet: string[];
   public space: number;
   public compatibility: string[];
   public notCompatible: string[];
   public species: string[];
   public categories: string[];

    constructor(name: string, imagePath: string, temprature: number, diet: string[], space: number, compatibility: string[], notCompatible: string[], species: string[], categories: string[]) {
        this.name = name;
        this.imagePath = imagePath;
        this.temprature = temprature;
        this.diet = diet;
        this.space = space;
        this.compatibility = compatibility;
        this.notCompatible = notCompatible;
        this.species = species;
        this.categories = categories;
    }
}