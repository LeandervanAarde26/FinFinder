export class LocationModel{
   public id: string;
   public tankSize: number;
   public locationName: string;
   public address: string; 
   public occuppied: [{Fish: string, quantity: number}];
   public decor: [{Name: string, Quantity: string}];
   public utilities: [{Name: string, Quantity: string}];
   public remainingSpace: number;


    constructor(id: string, tankSize: number, locationName: string, address: string,occuppied: [{Fish: string, quantity: number}], decor: [{Name: string, Quantity: string}], utilities: [{Name: string, Quantity: string}], remainingSpace: number){
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