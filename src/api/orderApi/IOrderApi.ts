import IOrder from "../../pages/order/IOrder";
import Icart from "../cartApi/Icart";

export default interface IOrderApi extends IOrder {
  id?: number;
  products: Icart[];
  price: number;
}
