import React, { useEffect, useRef, useState } from "react";

import style from "./searchProducts.module.css";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";

import SearchProductsCard from "../card/SearchProductsCard";
import useClickOutside from "../../hooks/UseCloseBlcok";

interface SearchProductsProps {
  value: string;
  handleSetValue: () => void;
}

const SearchProducts = ({ value, handleSetValue }: SearchProductsProps) => {
  const { data: products = [] } = useGetProductsQuery({
    title: value,
  });

  const divRef = useRef<HTMLDivElement>(null);

  useClickOutside(divRef, handleSetValue); // закрытие окна при клике вне его

  return (
    <div>
      {value.length >= 3 && (
        <div className="">
          <div className={style.block_search_products} ref={divRef}>
            {products.length >= 1 ? (
              products.map((item) => (
                <SearchProductsCard key={item.id} {...item} />
              ))
            ) : (
              <div className="bosrder border-black text-center py-1">
                По вашему запросу <span className="font-bold">"{value}"</span>{" "}
                ничего не найдено
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
