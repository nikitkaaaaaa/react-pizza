import IOrder from "../../pages/order/IOrder";
import Icart from "../cartApi/Icart";

export default interface IorderApi extends IOrder {
  products: Icart[];
  price: number;
}
