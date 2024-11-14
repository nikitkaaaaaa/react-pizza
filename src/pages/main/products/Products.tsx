import React from "react";

import { useGetProductsQuery } from "../../../api/productsApi/productsApi";
import Card from "../../../componets/card/Card";
import style from "../main.module.css";

const Products = () => {
  const { data = [] } = useGetProductsQuery();

  return (
    <div className="">
      <div className={style.content}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
