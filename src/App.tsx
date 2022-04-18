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
