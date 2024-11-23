import React from "react";

import remove_product_from_cart from "../../assets/icons/remove_product_from_cart.svg";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import {
  useRemoveOrAddOneProductToCartMutation,
  useRemoveProductFromCartMutation,
} from "../../api/cartApi/cartApi";

interface ICartCard {
  id: number;
  title: string;
  imageUrl: string;
  typeDough: string;
  price: number;
  size: string;
  count: number;
  ingredients?: string[];
}

const CartCard = ({
  id,
  title,
  imageUrl,
  typeDough,
  price,
  size,
  count,
  ingredients,
}: ICartCard) => {
  const [removeOrAddOneProductToCart] =
    useRemoveOrAddOneProductToCartMutation();

  const [removeProductFromCart] = useRemoveProductFromCartMutation();

  const handleRemoveOrAddOneProductToCart = async (type: "add" | "remove") => {
    try {
      if (type === "add") {
        await removeOrAddOneProductToCart({
          id: id,
          count: count + 1,
        }).unwrap();
      } else {
        await removeOrAddOneProductToCart({
          id: id,
          count: count > 1 ? count - 1 : count,
        }).unwrap();
      }
    } catch (error) {}
  };

  const handleRemoveProductFromCart = async () => {
    try {
      await removeProductFromCart(id);
    } catch (error) {
      alert("Не удалось удалить товар из корзины!");
    }
  };

  return (
    <div>
      <div className=" bg-white flex gap-5 mb-3 py-5 px-7">
        <img src={imageUrl} alt={title} className="w-[65px] h-[65px]" />

        <div className="w-full">
          <div className="font-bold">{title}</div>
          <div className="text-gray-500">
            <div>
              {size}, {typeDough} тесто
            </div>

            {ingredients && (
              <span
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {ingredients.map((item, index) => (
                  <span key={index} className="lowercase">
                    {index === 0 && <span>+</span>} {item}
                    {index !== ingredients.length - 1 && <span>,</span>}
                  </span>
                ))}
              </span>
            )}
          </div>
          <hr className="my-3.5" />
          <div className=" flex justify-between items-center">
            <div className="flex  gap-2 items-center">
              <button
                className="w-[30px] h-[30px] border border-[#FE5F00] flex flex-col items-center justify-center rounded-md"
                onClick={() => handleRemoveOrAddOneProductToCart("remove")}
              >
                <img src={minus} alt="minus" />
              </button>
              <div className="font-bold">{count}</div>
              <button
                className="w-[30px] h-[30px] border border-[#FE5F00] flex flex-col items-center justify-center rounded-md"
                onClick={() => handleRemoveOrAddOneProductToCart("add")}
              >
                <img src={plus} alt="plus" />
              </button>
            </div>

            <div className="flex  gap-3.5 items-center">
              <div className="font-bold ">{price} ₽</div>
              <img
                src={remove_product_from_cart}
                alt="remove product from cart"
                className="mb-0.5 cursor-pointer"
                onClick={handleRemoveProductFromCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
