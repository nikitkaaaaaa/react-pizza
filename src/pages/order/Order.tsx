import React from "react";
import { useForm } from "react-hook-form";

import IOrder from "./IOrder";
import { useGetCartProductsQuery } from "../../api/cartApi/cartApi";
import DeliveryAddress from "./deliveryAddress/DeliveryAddress";
import PersonalInfo from "./personalInfo/PersonalInfo";
import Payment from "./payment/Payment";

const Order = () => {
  const { data: cartProducts = [] } = useGetCartProductsQuery();

  const priceProducts: number = cartProducts.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IOrder>();

  const handleOnSubmit = (data: IOrder) => {
    console.log(data.name, "name");
    console.log(data.Email, "Email");
    console.log(data.address, "address");
    console.log(data.phone, "phone");
    console.log(data.surname, "surname");
    console.log(data.message, "message");
    reset();
  };

  return (
    <div>
      <div className="container">
        <div className="font-bold text-4xl mb-12">Оформление заказа</div>

        <form onSubmit={handleSubmit(handleOnSubmit)} className=" relative">
          {/* Персональная информация */}

          <PersonalInfo errors={errors} register={register} />
          {/* Персональная информация */}

          {/* Блок оплаты  */}
          <Payment priceProducts={priceProducts} />
          {/* Блок оплаты  */}

          {/* Адрес доставки */}

          <DeliveryAddress errors={errors} register={register} />
          {/* Адрес доставки */}
        </form>
      </div>
    </div>
  );
};

export default Order;
