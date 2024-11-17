import React, { useState } from "react";

interface PriceProductsFilterProps {
  handleSelectPriceFrom: (priceFrom: string) => void;
  handleSelectPriceTo: (priceTo: string) => void;
}

const PriceProductsFilter = ({
  handleSelectPriceFrom,
  handleSelectPriceTo,
}: PriceProductsFilterProps) => {
  const [valuePriceFrom, setValuePriceFrom] = useState<string>(""); //значение цены (от)

  const [valuePriceTo, setValuePriceTo] = useState<string>(""); // значение цены (до)

  const handleUpdatePriceFrom = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValuePriceFrom(event.target.value);
    handleSelectPriceFrom(event.target.value);
  };

  const handleUpdatePriceTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuePriceTo(event.target.value);
    handleSelectPriceTo(event.target.value);
  };

  return (
    <div>
      <div className="font-bold text-xl mb-3">Цена от и до:</div>
      <div className=" flex  justify-between gap-2 my-2.5">
        <input
          type="text"
          className="outline-none rounded-lg border h-[40px] w-full px-4 text-gray-500"
          placeholder="0 ₽"
          value={valuePriceFrom}
          onChange={(value) => handleUpdatePriceFrom(value)}
        />
        <input
          type="text"
          className="outline-none rounded-lg border h-[40px] w-full px-4 text-gray-500"
          placeholder="1200 ₽"
          value={valuePriceTo}
          onChange={(value) => handleUpdatePriceTo(value)}
        />
      </div>
    </div>
  );
};

export default PriceProductsFilter;
