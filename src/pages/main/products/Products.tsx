import React from "react";

import Card from "../../../componets/card/Card";
import style from "../main.module.css";
import Iproducts from "../../../api/productsApi/Iproducts";

interface ProductsProps {
  products: Iproducts[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div>
      <div className={style.content}>
        {products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      <div>
        {products.length < 1 && (
          <div className="text-2xl font-bold flex flex-col items-center justify-center h-[800px] text-center">
            Мы не нашли товары, соответствующие вашим фильтрам. Попробуйте
            выбрать другие параметры!
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
