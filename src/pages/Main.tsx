import React from "react";

import SelectCategory from "../componets/selectCategory/SelectCategory";
import ChoiseProducts from "../componets/choiseProducts/ChoiseProducts";

const Main = () => {
  return (
    <div>
      <div className="text-3xl font-medium">Все пиццы</div>
      <div className=" flex justify-between items-center mt-7">
        <SelectCategory />
        <ChoiseProducts />
      </div>
    </div>
  );
};

export default Main;
