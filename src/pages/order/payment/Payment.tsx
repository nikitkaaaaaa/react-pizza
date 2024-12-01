import React from "react";

interface PaymentProps {
  priceProducts: number;
}

const Payment = ({ priceProducts }: PaymentProps) => {
  return (
    <div className="bg-white w-[400px]  rounded-[30px] py-5 absolute top-0 right-0">
      <div className="h-[375px] flex flex-col justify-between">
        <div className="px-10  h-full flex flex-col justify-center">
          <div className="text-xl ">Итого:</div>
          <div className="font-bold text-3xl mt-1">{priceProducts} ₽</div>
        </div>
        <hr className="mb-6" />
        <div className="px-10 text-lg  h-full justify-center flex flex-col">
          <div className="flex justify-between items-center">
            <div>Стоимость товаров: </div>
            <div className="font-bold  ">{priceProducts} ₽</div>
          </div>
          <div className="flex justify-between items-center my-2 ">
            <div>Налоги: </div>
            <div className="font-bold ">
              {Math.round(priceProducts * 0.05)} ₽
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div>Доставка: </div>
            <div className="font-bold ">120 ₽</div>
          </div>
        </div>
        <hr className="my-6" />

        <div className="px-10   h-full flex flex-col justify-center">
          <button className="text-white text-lg bg-[#FF5F00] rounded-[15px] w-full h-[60px]">
            Оплатить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
