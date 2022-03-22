export class Shipment {
  private toAddress: string;
  private fromAddress: string;
  private toZipCode: string;
  private fromZipCode: string;
  private weight: number;
  private shipmentID: number;

  constructor({toAddress ,fromAddress, toZipCode, fromZipCode, weight} : IShip) {
    this.shipmentID = this.getShipmentID()
    this.toAddress = toAddress;
    this.fromAddress = fromAddress;
    this.toZipCode = toZipCode;
    this.fromZipCode = fromZipCode;
    this.weight = weight;
  }

  public getShipmentID () : number {
    return Number(Math.random().toString(10).slice(2));
  }

  public ship() : string {
    return (`
      Shipment with the ID ${this.shipmentID} will be picked up from ${this.fromAddress} ${this.fromZipCode}\n,
      and shipped to ${this.toAddress} ${this.toZipCode} \n.
      Cost = ${this.calculatePrice()}
    `)
  }

  getWeight () : number {
    return this.weight;
  }

  setToAddress ( value : string) {
    this.toAddress = value;
  }

  setFromAddress (value : string) {
    this.fromAddress = value
  }

  setToZipCode (value : string) {
    this.toZipCode = value
  }

  setFromZipCode (value : string) {
    this.fromZipCode = value
  }

  protected calculatePrice () : string {
    return `${(this.weight * 0.39).toFixed(2)}$`
  }
}

export interface IShip {
  toAddress : string;
  fromAddress : string;
  toZipCode : string;
  fromZipCode : string;
  weight : number;

}