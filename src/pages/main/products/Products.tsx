import React from "react";

import Card from "../../../componets/card/Card";
import style from "../main.module.css";
import Iproducts from "../../../api/productsApi/Iproducts";

interface ProductsProps {
  products: Iproducts[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="">
      <div className={style.content}>
        {products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
