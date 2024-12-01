import React from "react";

import IOrder from "../IOrder";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface DeliveryAddressProps {
  errors: FieldErrors<IOrder>;
  register: UseFormRegister<IOrder>;
}

const DeliveryAddress = ({ errors, register }: DeliveryAddressProps) => {
  return (
    <div className="w-[750px] mt-8 bg-white rounded-[30px] py-7">
      <div className="font-bold text-2xl px-10">2. Адрес доставки</div>
      <hr className="my-6" />

      {/* Поле адрес */}
      <div className="text-sm  px-10 ">
        <div className="font-bold text">Введите адрес</div>
        <input
          type="text"
          className={`outline-none h-[48px] rounded-[10px] w-full pl-4 my-2 ${
            errors.address?.message ? "border border-[#FE0000]" : "border"
          }`}
          {...register("address", {
            required: "Введите ваш адрес",
          })}
        />
        <div className="text-[#FE0000]">{errors.address?.message}</div>
      </div>
      {/* Поле адрес */}

      {/* Комментарий  */}
      <div className="mt-4 text-sm  px-10 ">
        <div className="font-bold text-sm">Комментарий к заказу</div>
        <textarea
          placeholder="Укажите тут доплнительную информацию для курьера"
          className={`w-full  rounded-[10px] outline-none min-h-24 max max-h-32 pl-4 pt-3 my-2 ${
            errors.message?.message ? "border border-[#FE0000]" : "border"
          }`}
          {...register("message", {
            required: "Введите ваш комментарий",
          })}
        ></textarea>
        <div className="text-[#FE0000]">{errors.message?.message}</div>
      </div>
      {/* Комментарий  */}
    </div>
  );
};

export default DeliveryAddress;
