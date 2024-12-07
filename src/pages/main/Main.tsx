import React, { useState } from "react";

import style from "./main.module.css";
import SelectCategory from "../../componets/selectCategory/SelectCategory";
import SortProducts from "../../componets/sortProducts/SortProducts";
import Products from "./products/Products";
import FltersProducts from "./filtersProducts/FltersProducts";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";
import Stories from "../../componets/stories/Stories";
import Loading from "../../componets/loading/Loading";

const Main = () => {
  const [sort, setSort] = useState<string>("-rating"); // тип сортировки продукта

  const [typeDough, setTypeDough] = useState<string[]>([]); // фильтр, который фильтрует продукты по типу теста

  const [weigth, setWeigth] = useState<string[]>([]); // фильтр, который фильтрует продукты по массе

  const [size, setSize] = useState<string[]>([]); // фильтр, который фильтрует продукты по размеру

  const [feature, setFeature] = useState<string[]>([]); // фильтр, который фильтрует продукты, которые являются новинкой или подходят для компании

  const [priceFrom, setPriceFrom] = useState<string>(""); // фильтр, который фильтрует продукты по цене (от)

  const [priceTo, setPriceTo] = useState<string>(""); // фильтр, который фильтрует продукты по цене (до)

  const [category, setCategory] = useState<string>(""); // фильтр, который фильтрует продукты по категории

  const { data: products = [], isLoading } = useGetProductsQuery({
    sort: sort,
    typeDough: typeDough,
    weigth: weigth,
    size: size,
    priceFrom: priceFrom,
    priceTo: priceTo,
    category: category,
    feature: feature,
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="container text-4xl font-bold">Все пиццы</div>
      <div
        className="sticky top-0 bg-white z-10  py-4 mb-6"
        style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
      >
        {/* Выбор категории продуктов и сортирвока */}
        <div className=" container flex justify-between items-center  mt-4">
          <SelectCategory
            handleSelectCategoryProducts={(category: string) =>
              setCategory(category)
            }
          />
          <SortProducts
            handleSortProducts={(typeSort: string) => setSort(typeSort)}
          />
        </div>
        {/* Выбор категории продуктов и сортирвока */}
      </div>

      <div className="container">
        <Stories />

        <div className="text-2xl font-bold mb-4 mt-6">Фильтрация</div>

        <div className="flex gap-32">
          <div className={style.filters_products}>
            <FltersProducts
              handleSelectTypeDough={(typeDough: string[]) =>
                setTypeDough(typeDough)
              }
              handleSelectWeigthProducts={(weigth: string[]) =>
                setWeigth(weigth)
              }
              handleSelectSizeProducts={(size: string[]) => setSize(size)}
              handleSelectFeatureProducts={(feature: string[]) =>
                setFeature(feature)
              }
              handleSelectPriceFrom={(priceFrom: string) =>
                setPriceFrom(priceFrom)
              }
              handleSelectPriceTo={(priceTo: string) => setPriceTo(priceTo)}
            />
          </div>

          <div className={style.products}>
            <Products products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
