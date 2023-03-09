export class Prebuilts {
    public tank: { id: string, size: number, stock: number};
    public imagePath: string;
    public occupied: [{fish: string, quantity: number}];
    public decor: [{decorName: string, quantity: number}];
    public utilities: [{utilityName: string, quantity: number}];
    public remainingSpace: number

    constructor(tank: { id: string, size: number, stock: number }, imagePath: string, occupied: [{ fish: string, quantity: number }], decor: [{ decorName: string, quantity: number }], utilities: [{ utilityName: string, quantity: number }], remainingSpace: number) {
        this.tank = tank;
        this.imagePath = imagePath;
        this.occupied = occupied;
        this.decor = decor;
        this.utilities = utilities;
        this.remainingSpace = remainingSpace;
    }
}