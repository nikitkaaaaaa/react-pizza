import React, { useEffect, useRef, useState } from "react";

import style from "./popup.module.css";
import close_popup from "../../assets/icons/close_popup.svg";
import add_ingredients from "../../assets/icons/add_ingredients.svg";
import IPopup from "./IPopup";
import { useGetIngredientsQuery } from "../../api/ingredientsApi/ingredientsApi";
import useDisableScroll from "../../hooks/UseDisableScroll";
import {
  useAddProductToCartMutation,
  useGetCartProductsQuery,
  useRemoveOrAddOneProductToCartMutation,
} from "../../api/cartApi/cartApi";
import useClickOutside from "../../hooks/UseCloseBlcok";

const Popup = ({
  id,
  title,
  showPopup,
  imageUrl,
  closePopup,
  description,
  price,
}: IPopup) => {
  const sizeImage: string[] = ["336px", "409px", "482px"];

  const { data: ingredients = [] } = useGetIngredientsQuery();

  const { data: cartProducts = [] } = useGetCartProductsQuery();

  const sizeProduct: string[] = ["20 см", "30 см", "40 см"];

  const typeDough: string[] = ["Традиционное", "Тонкое"];

  const [selectSizeProduct, setSelectSizeProduct] = useState<number>(1); // выбранный размер продукта

  const [selectTypeDough, setSelectTypeDough] = useState<number>(0); // выбранный  вид теста

  const [selectIngredients, setSelectIngredients] = useState<number[]>([]); // выбранные ингредиенты

  const totalPrice = selectIngredients.reduce((total, index) => {
    return total + ingredients[index].price;
  }, price); // цена продукта с учетом ингредиентов

  const serializedIngredients = JSON.stringify(
    selectIngredients.map((index) => ingredients[index].title)
  );

  const productInCart = cartProducts.find(
    (item) =>
      item.parentId === id &&
      item.typeDough === typeDough[selectTypeDough] &&
      item.size === sizeProduct[selectSizeProduct] &&
      item.price === totalPrice &&
      JSON.stringify(item.ingredients) === serializedIngredients
  ); // продукт, который находится в корзине

  const windowForm = useRef<HTMLDivElement>(null);

  const [addProductToCart] = useAddProductToCartMutation();

  const [removeOrAddOneProductToCart] =
    useRemoveOrAddOneProductToCartMutation();

  const handleSelectIngredients = (ingredient: number) => {
    if (selectIngredients.includes(ingredient)) {
      setSelectIngredients(
        selectIngredients.filter((item) => item !== ingredient)
      );
    } else {
      setSelectIngredients([...selectIngredients, ingredient]);
    }
  };

  const handleClosePopup = () => {
    closePopup();
    setSelectSizeProduct(1);
    setSelectTypeDough(0);
    setSelectIngredients([]);
  }; // закрыть popup

  const handleAddProductToCart = async () => {
    handleClosePopup();

    try {
      if (productInCart) {
        await removeOrAddOneProductToCart({
          id: productInCart.id,
          count: productInCart.count + 1,
        }).unwrap();
      } else {
        const product = {
          id: id,
          parentId: id,
          title: title,
          imageUrl: imageUrl[1],
          price: totalPrice,
          size: sizeProduct[selectSizeProduct],
          typeDough: typeDough[selectTypeDough],
          ingredients: selectIngredients.map(
            (index) => ingredients[index].title
          ),
          count: 1,
        };

        await addProductToCart(product).unwrap();
      }
    } catch (error) {
      alert("Не удалось обработать операцию!");
    }
  };

  useDisableScroll(showPopup); // отмена скролла при открытии popup

  useClickOutside(windowForm, closePopup); // закрытие окна при клике вне его

  return (
    <div>
      {showPopup && (
        <div className={style.blur}>
          <div className={style.popup} ref={windowForm}>
            <div className={style.popup_left_side}>
              <img
                src={imageUrl[selectTypeDough]}
                alt={title}
                style={{ width: sizeImage[selectSizeProduct] }}
              />
            </div>
            <div className={style.popup_right_side}>
              <div className="font-bold text-2xl">{title}</div>

              <div className="text-gray-500 text-sm mt-1">
                {sizeProduct[selectSizeProduct]},{" "}
                <span className="lowercase">{typeDough[selectTypeDough]}</span>{" "}
                тесто {sizeProduct[selectSizeProduct]}
              </div>

              <div className="text-sm mb-3 mt-2">{description}</div>

              {/* Выбрать размер пррдукта */}
              <div className="h-[32px] bg-[#F3F3F7] my-2 flex rounded-full cursor-pointer p-[2px]">
                {sizeProduct.map((item, index) => (
                  <div
                    key={index}
                    className={`w-full flex flex-col justify-center items-center text-sm ${
                      selectSizeProduct === index &&
                      "bg-white rounded-full shadow-md"
                    }`}
                    onClick={() => setSelectSizeProduct(index)}
                  >
                    {item}
                  </div>
                ))}
              </div>
              {/* Выбрать размер пррдукта */}

              {/* Выбрать тип теста пррдукта */}
              <div className="h-[32px] bg-[#F3F3F7] my-2 flex rounded-full cursor-pointer p-[2px]">
                {typeDough.map((item, index) => (
                  <div
                    key={index}
                    className={`w-full flex flex-col justify-center items-center text-sm ${
                      selectTypeDough === index &&
                      "bg-white rounded-full shadow-md"
                    }`}
                    onClick={() => setSelectTypeDough(index)}
                  >
                    {item}
                  </div>
                ))}
              </div>
              {/* Выбрать тип теста пррдукта */}

              <div className="text-xl font-bold my-4">Добавить по вкусу</div>

              {/* Добавить  ингредиенты*/}
              <div className={style.ingredients_container}>
                {ingredients
                  .slice(typeDough[selectTypeDough] === "Тонкое" ? 1 : 0) //  в зависимости от типа теста разные ингредиенты
                  .map((item, index) => (
                    <button
                      key={index}
                      className={`border  p-2  relative rounded-xl cursor-pointer  flex flex-col items-center justify-center ${
                        selectIngredients.includes(index)
                          ? "border-[#FF6900]"
                          : "border-white"
                      }`}
                      style={{ boxShadow: "rgba(6, 5, 50, 0.12) 0px 4px 20px" }}
                      onClick={() => handleSelectIngredients(index)}
                    >
                      <div className="flex justify-center">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-[88px] h-[88px]"
                        />
                      </div>
                      <div className="text-xs h-[32px] text-center">
                        {item.title}
                      </div>
                      <div className="text-sm text-center font-bold mt-1">
                        {item.price} ₽
                      </div>
                      {selectIngredients.includes(index) && (
                        <img
                          src={add_ingredients}
                          alt="add ingredients"
                          className="absolute top-1 right-1"
                        />
                      )}
                    </button>
                  ))}
              </div>
              {/* Добавить  ингредиенты*/}

              <div className="fixed bottom-0 z-30 right-4 bg-white  mt-[24px] ml-[30px] w-[364px] h-[115px] flex flex-col justify-center items-center pl-8    ">
                <button
                  className="w-[334px] border-none px-[48px] py-[12px] bg-[#FF6900] mr-[30px]
                 text-white h-[48px] text-base outline-none text-center rounded-full"
                  onClick={handleAddProductToCart}
                >
                  В корзину за {totalPrice} ₽
                </button>
              </div>
            </div>
          </div>

          <img
            src={close_popup}
            alt="close popup"
            className="cursor-pointer absolute top-[180px] right-[460px] transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={handleClosePopup}
          />
        </div>
      )}
    </div>
  );
};

export default Popup;
