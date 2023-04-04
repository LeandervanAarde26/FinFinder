
export class UserMaterialModel {
    public _id: string;
    public name: string;
    public imagePath: string; 
    public quantity: number;

    constructor(_id: string, name: string, imagePath: string, quantity: number ) {
        this._id = _id;
        this.name = name
        this.imagePath = imagePath;
        this.quantity = quantity;
    }
}