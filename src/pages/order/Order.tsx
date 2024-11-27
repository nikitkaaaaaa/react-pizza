import React from "react";
import { useForm } from "react-hook-form";

import IOrder from "./IOrder";
import {
  useGetCartProductsQuery,
  useRemoveProductFromCartMutation,
} from "../../api/cartApi/cartApi";
import DeliveryAddress from "./deliveryAddress/DeliveryAddress";
import PersonalInfo from "./personalInfo/PersonalInfo";
import Payment from "./payment/Payment";
import { useAddProductToOrderMutation } from "../../api/orderApi/orderApi";
import IorderApi from "../../api/orderApi/IOrderApi";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";

const Order = () => {
  const { data: cartProducts = [] } = useGetCartProductsQuery();

  const [addProductToOrder] = useAddProductToOrderMutation();

  const [removeProductFromCart] = useRemoveProductFromCartMutation();

  const priceProducts: number = cartProducts.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IOrder>();

  const handleOnSubmit = async (data: IOrder) => {
    reset();
    try {
      navigate(routes.main);

      setTimeout(() => {
        alert("Вы оплатили корзину!");
      }, 1250);

      const product: IorderApi = {
        products: cartProducts,
        price: priceProducts,
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        Email: data.Email,
        message: data.message,
        address: data.address,
      };

      await addProductToOrder(product);

      for (let i = 0; i < cartProducts.length; i++) {
        await removeProductFromCart(cartProducts[i].id).unwrap();
      }
    } catch (error) {
      alert("Не удалось оплатить корзину!");
    }
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
