import React, { useState } from "react";

import PriceProductsFilter from "./priceProductsFilter/PriceProductsFilter";
import ItemProductsFilter from "./itemProductsFilter/ItemProductsFilter";

interface FltersProductsProps {
  handleSelectTypeDough: (typeDough: string[]) => void;
  handleSelectWeigthProducts: (weigth: string[]) => void;
  handleSelectSizeProducts: (size: string[]) => void;
  handleSelectPriceFrom: (priceFrom: string) => void;
  handleSelectPriceTo: (priceFrom: string) => void;
  handleSelectFeatureProducts: (feature: string[]) => void;
}

const FltersProducts = ({
  handleSelectTypeDough,
  handleSelectWeigthProducts,
  handleSelectSizeProducts,
  handleSelectPriceFrom,
  handleSelectPriceTo,
  handleSelectFeatureProducts,
}: FltersProductsProps) => {
  const sizeProducts: string[] = ["20 см", "30 см", "40 см"];

  const weigthProducts: string[] = ["250 гр", "350 гр", "500 гр"];

  const typeFeatureProduct: string[] = ["Для компании", "Новинки"];

  const typeDough: string[] = ["Традиционное", "Тонкое"];

  const [selectedTypeDough, setSelectedTypeDough] = useState<string[]>([]); // выбранный обьект из списка типа теста продукта

  const [selectedWeigth, setSelectedWeigt] = useState<string[]>([]); // выбранный обьект из списка массы продукта

  const [selectedSize, setSelectedSize] = useState<string[]>([]); // выбранный обьект из списка размера продукта

  const [selectedFeature, setSelectedFeature] = useState<string[]>([]); // выбранный обьект из списка особенностей продукта

  const [valuePriceFrom, setValuePriceFrom] = useState<string>(""); //значение цены (от)

  const [valuePriceTo, setValuePriceTo] = useState<string>(""); // значение цены (до)

  const handleSelectedWeigt = (item: string) => {
    if (selectedWeigth.includes(item)) {
      setSelectedWeigt(selectedWeigth.filter((weigt) => weigt !== item));
    } else {
      setSelectedWeigt([...selectedWeigth, item]);
    }
  };

  const handleSelectedSizeProduct = (item: string) => {
    if (selectedSize.includes(item)) {
      setSelectedSize(selectedSize.filter((size) => size !== item));
    } else {
      setSelectedSize([...selectedSize, item]);
    }
  };

  const handleSelectedTypeDough = (item: string) => {
    if (selectedTypeDough.includes(item)) {
      setSelectedTypeDough(selectedTypeDough.filter((size) => size !== item));
    } else {
      setSelectedTypeDough([...selectedTypeDough, item]);
    }
  };

  const handleSelectedTypeFeature = (item: string) => {
    if (selectedFeature.includes(item)) {
      setSelectedFeature(selectedFeature.filter((feature) => feature !== item));
    } else {
      setSelectedFeature([...selectedFeature, item]);
    }
  };

  const handleUpdateFilters = () => {
    handleSelectTypeDough(selectedTypeDough);
    handleSelectWeigthProducts(selectedWeigth);
    handleSelectSizeProducts(selectedSize);
    handleSelectFeatureProducts(selectedFeature);
    handleSelectPriceFrom(valuePriceFrom);
    handleSelectPriceTo(valuePriceTo);
  };

  return (
    <div className="text-lg">
      {/* Фильтр по новинкам и для компании */}
      <ItemProductsFilter
        arr={typeFeatureProduct}
        selectedItem={selectedFeature}
        handleSelectedItem={handleSelectedTypeFeature}
      />
      {/* Фильтр по новинкам и для компании */}

      <hr className="my-5" />

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
      <ItemProductsFilter
        arr={weigthProducts}
        selectedItem={selectedWeigth}
        handleSelectedItem={handleSelectedWeigt}
        titleFilter={"Вес"}
      />
      {/* Фильтр по весу */}

      <hr className="my-5" />

      {/* Фильтр по размеру */}
      <ItemProductsFilter
        arr={sizeProducts}
        selectedItem={selectedSize}
        handleSelectedItem={handleSelectedSizeProduct}
        titleFilter={"Размеры"}
      />
      {/* Фильтр по размеру */}

      <hr className="my-5" />

      {/* Фильтр по типу теста */}

      <ItemProductsFilter
        arr={typeDough}
        selectedItem={selectedTypeDough}
        handleSelectedItem={handleSelectedTypeDough}
        titleFilter={"Тип теста"}
      />
      {/* Фильтр по типу теста */}

      <button
        className="rounded-2xl text-white bg-[#FE5F00] w-[250px] h-[50px] mt-6"
        onClick={handleUpdateFilters}
      >
        Применить
      </button>
    </div>
  );
};

export default FltersProducts;
