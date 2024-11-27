import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import IOrder from "../IOrder";

interface PersonalInfoProps {
  errors: FieldErrors<IOrder>;
  register: UseFormRegister<IOrder>;
}

const PersonalInfo = ({ errors, register }: PersonalInfoProps) => {
  return (
    <div className="w-1/2 ">
      <div className="font-bold text-2xl">1. Персональная информация</div>
      <hr className="my-4" />
      <div className=" flex gap-8">
        {/* Поле имя */}
        <div className="w-full text-sm h-[106px] ">
          <div className="font-bold">Имя</div>
          <input
            type="text"
            className={`outline-none h-[48px] rounded-[10px] w-full pl-4 my-2 ${
              errors.name?.message ? "border border-[#FE0000]" : "border"
            }`}
            {...register("name", { required: "Введите ваше имя" })}
          />
          <div className="text-[#FE0000]">{errors.name?.message}</div>
        </div>
        {/* Поле имя */}

        {/* Поле Фамилия */}
        <div className="w-full text-sm h-[106px]">
          <div className="fosnt-bold font-bold">Фамилия</div>
          <input
            type="text"
            className={`outline-none h-[48px] rounded-[10px] w-full pl-4 my-2 ${
              errors.surname?.message ? "border border-[#FE0000]" : "border"
            }`}
            {...register("surname", {
              required: "Введите вашу фамилию",
            })}
          />
          <div className="text-[#FE0000]">{errors.surname?.message}</div>
        </div>
        {/* Поле Фамилия */}
      </div>

      <div className="flex gap-8 mt-4">
        {/* Поле e-mail */}
        <div className="w-full text-sm h-[106px]">
          <div className="font-bold">E-mail</div>
          <input
            type="email"
            className={`outline-none h-[48px] rounded-[10px] w-full pl-4 my-2 ${
              errors.Email?.message ? "border border-[#FE0000]" : "border"
            }`}
            {...register("Email", {
              required: "Введите ваш e-mail",
            })}
          />
          <div className="text-[#FE0000]">{errors.Email?.message}</div>
        </div>
        {/* Поле e-mail */}

        {/* Поле Телефон */}
        <div className="w-full text-sm h-[106px]">
          <div className="font-bold ">Телефон</div>
          <input
            type="tel"
            className={`outline-none h-[48px] rounded-[10px] w-full pl-4 my-2 ${
              errors.phone?.message ? "border border-[#FE0000]" : "border"
            }`}
            {...register("phone", {
              required: "Введите ваш телефон",
            })}
          />
          <div className="text-[#FE0000]">{errors.phone?.message}</div>
        </div>
        {/* Поле Телефон */}
      </div>
    </div>
  );
};

export default PersonalInfo;
