import React, { useState } from "react";

import WeigthProductsFilter from "./weigthProductsFilter/WeigthProductsFilter";
import TypeDoughFilter from "./typeDoughFilter/TypeDoughFilter";
import PriceProductsFilter from "./priceProductsFilter/PriceProductsFilter";
import SizeProductsFilter from "./sizeProductsFilter/SizeProductsFilter";

interface FltersProductsProps {
  handleSelectTypeDough: (typeDough: string) => void;
  handleSelectWeigthProducts: (weigth: string[]) => void;
  handleSelectSizeProducts: (size: string[]) => void;
  handleSelectPriceFrom: (priceFrom: string) => void;
  handleSelectPriceTo: (priceFrom: string) => void;
}

const FltersProducts = ({
  handleSelectTypeDough,
  handleSelectWeigthProducts,
  handleSelectSizeProducts,
  handleSelectPriceFrom,
  handleSelectPriceTo,
}: FltersProductsProps) => {
  const typeDough: string[] = ["Традиционное", "Тонкое"];

  const [selectedTypeDough, setSelectedTypeDough] = useState<number>(); // выбранный обьект из списка типа теста продукта

  const [selectedTypeWeigth, setSelectedTypeWeigt] = useState<string[]>([]); // выбранный обьект из списка массы продукта

  const [selectedSize, setSelectedSize] = useState<string[]>([]); // выбранный обьект из списка размера продукта

  const [valuePriceFrom, setValuePriceFrom] = useState<string>(""); //значение цены (от)

  const [valuePriceTo, setValuePriceTo] = useState<string>(""); // значение цены (до)

  const handleSelectedTypeWeigt = (item: string) => {
    if (selectedTypeWeigth.includes(item)) {
      setSelectedTypeWeigt(
        selectedTypeWeigth.filter((weigt) => weigt !== item)
      );
    } else {
      setSelectedTypeWeigt([...selectedTypeWeigth, item]);
    }
  };

  const handleSelectedTySizeProduct = (item: string) => {
    if (selectedSize.includes(item)) {
      setSelectedSize(selectedSize.filter((size) => size !== item));
    } else {
      setSelectedSize([...selectedSize, item]);
    }
  };

  const handleUpdateFilters = () => {
    handleSelectTypeDough(typeDough[selectedTypeDough ?? 0]);
    handleSelectWeigthProducts(selectedTypeWeigth);
    handleSelectSizeProducts(selectedSize);
    handleSelectPriceFrom(valuePriceFrom);
    handleSelectPriceTo(valuePriceTo);
  };

  return (
    <div className="text-lg">
      {/* Фильтр по цене  */}
      <PriceProductsFilter
        handleSelectPriceFrom={(priceFrom: string) =>
          setValuePriceFrom(priceFrom)
        }
        handleSelectPriceTo={(priceTo: string) => setValuePriceTo(priceTo)}
      />
      {/* Фильтр по цене  */}

      <hr className="my-5" />

      {/* Фильтр по весу */}
      <WeigthProductsFilter
        selectedTypeWeigth={selectedTypeWeigth}
        handleSelectedTypeWeigt={handleSelectedTypeWeigt}
      />
      {/* Фильтр по весу */}

      <hr className="my-5" />

      {/* Фильтр по размеру */}
      <SizeProductsFilter
        selectedSize={selectedSize}
        handleSelectedTySizeProduct={handleSelectedTySizeProduct}
      />
      {/* Фильтр по размеру */}

      <hr className="my-5" />

      {/* Фильтр по типу теста */}
      <TypeDoughFilter
        selectedTypeDough={selectedTypeDough ?? 1}
        typeDough={typeDough}
        handleSelectTypeDough={(index: number) => setSelectedTypeDough(index)}
      />
      {/* Фильтр по типу теста */}

      <button
        className="rounded-2xl text-white bg-[#FE5F00] w-[250px] h-[50px] mt-7"
        onClick={handleUpdateFilters}
      >
        Применить
      </button>
    </div>
  );
};

export default FltersProducts;
