import { PathString } from "react-hook-form";

export default interface IOrder {
  name: string;
  surname: string;
  phone: string;
  Email: string;
  message: PathString;
  address: string;
}
