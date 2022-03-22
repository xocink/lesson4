import {IShip, Shipment} from "./hometaks/Shipment";
import {DoNotLeaveShipmentDecorator, FragileShipmentDecorator, ShipmentDecorator} from "./hometaks/ShipmentDecorator";
import {ChicagoSprintShipper, Shipper} from "./hometaks/Shipper";

const shipmentsList : IShip[] = [
  {
    toAddress : 'Some arrival address',
    fromAddress : 'Saome address that saying as where is comming from',
    toZipCode : 'toZipCode',
    fromZipCode : 'fromZipCode',
    weight: 3.4
  }
]
// interface Strategy {
//   execute(a: number, b: number): number;
// }
//
// // Concrete strategies implement the algorithm while following
// // the base strategy interface. The interface makes them
// // interchangable in the context.
// class ConcreteStrategyAdd implements Strategy {
//   execute(a, b) {
//     return a + b;
//   }
// }
//
// class ConcreteStrategySubstract implements Strategy {
//   execute(a, b) {
//     return a - b;
//   }
// }
//
// class ConcreteStrategyMultiply implements Strategy {
//   execute(a, b) {
//     return a * b;
//   }
// }
//
// class Context {
//   private strategy: Strategy;
//
//   setStrategy(s: Strategy) {
//     this.strategy = s;
//   }
//   // The context delegates some work to the strategy object
//   // instead of implementing multiple versions of the
//   // algorithm on its own.
//   executeStrategy(a: number, b: number) {
//     return this.strategy.execute(a, b);
//   }
// }
//
// let ctx = new Context();
//
// ctx.setStrategy(new ConcreteStrategyAdd());
// ctx.executeStrategy(5, 2);
export const App  = () => {
  let instance  = new Shipment(shipmentsList[0]);
  console.log(instance.ship());
  instance = new FragileShipmentDecorator(instance,shipmentsList[0])
  console.log(instance.ship());
  instance = new DoNotLeaveShipmentDecorator(instance,shipmentsList[0])
  console.log(instance.ship());
  const shipper = new Shipper(instance)
  shipper.setStrategy(new ChicagoSprintShipper())
  console.log(shipper.getCost());

  return (
    <h1>You can look results from usage.ts in console </h1>
  )
}