import {IShip, Shipment} from "./Shipment";

export class ShipmentDecorator extends  Shipment{
  protected wrapper : Shipment;

  constructor(shipment : Shipment,props : IShip) {
    super({...props});
    this.wrapper = shipment
  }

  public ship() : string {
    return this.wrapper.ship();
  }
}

export class FragileShipmentDecorator extends ShipmentDecorator {
  public ship(): string {
    return (`${super.ship()}\n 
          **MARK FRAGILE**
        `);
  }
}

export class DoNotLeaveShipmentDecorator extends ShipmentDecorator {
  public ship(): string {
    return (`${this.wrapper.ship()}\n 
      **MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**
    `)
  }
}

export class ReturnReceiptShipmentDecorator extends ShipmentDecorator {
  public ship(): string {
    return (`${this.wrapper.ship()}\n 
      **MARK RETURN RECEIPT REQUESTED**
    `)
  }
}