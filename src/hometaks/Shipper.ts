import {Shipment} from "./Shipment";

export class Shipper {
  private shipment: Shipment;
  private strategy : Strategy;
  constructor(shipment : Shipment) {
    this.shipment = shipment
  }

  setStrategy(strategy : Strategy) {
    this.strategy = strategy
  }

  getInstance(shipment : Shipment) : Shipment {
    return shipment
  }

  getCost(): void {
    console.log(this.strategy.getCost(this.shipment));
  }

}

interface Strategy {
  getCost(instance : Shipment) : string;
}

export class AirEastShipper implements Strategy {
  getCost(instance : Shipment): string {
    return `${(instance.getWeight() * 0.39).toFixed(2)}$`
  }
}

export class ChicagoSprintShipper implements Strategy {
  getCost(instance : Shipment): string {
    return `${(instance.getWeight() * 0.42).toFixed(2)}$`
  }
}

export class PacificParcelShipper implements Strategy {
  getCost(instance : Shipment): string {
    return `${(instance.getWeight() * 0.51).toFixed(2)}$`
  }
}