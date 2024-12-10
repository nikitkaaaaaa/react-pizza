import React, { useState } from "react";

import style from "./pagination.module.css";
import Iproducts from "../../api/productsApi/Iproducts";

interface PaginationProps {
  products: Iproducts[];
}

const Pagination = ({ products }: PaginationProps) => {
  const [selectPage, setSelectPage] = useState<number>(0);

  const countPage = Math.ceil(products.length / 6);

  const page: number[] = Array.from(
    { length: countPage },
    (_, index) => index + 1
  );

  const handleSelectNextPage = () => {
    if (selectPage < page.length - 1) {
      setSelectPage((prev) => prev + 1);
    }
  };

  const handleSelectPreviousPage = () => {
    if (selectPage > 0) {
      setSelectPage((prev) => prev - 1);
    }
  };

  console.log(countPage);

  return (
    <div>
      <ul className={style.pagination}>
        <li onClick={handleSelectPreviousPage}>{"<"}</li>
        {page.map((item, index) => (
          <li
            key={index}
            className={`${
              index === selectPage ? style.select : "text-[#fc5e1e]"
            }`}
            onClick={() => setSelectPage(index)}
          >
            {item}
          </li>
        ))}
        <li onClick={handleSelectNextPage}>{">"}</li>
      </ul>
    </div>
  );
};

export default Pagination;
