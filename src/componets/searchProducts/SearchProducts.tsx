import style from "./searchProducts.module.css";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";
import SearchProductsCard from "../card/SearchProductsCard";

interface SearchProductsProps {
  value: string;
  showSearchBlock: boolean;
}

const SearchProducts = ({ value, showSearchBlock }: SearchProductsProps) => {
  const { data: products = [] } = useGetProductsQuery({
    title: value,
  });

  return (
    <div>
      {showSearchBlock && value.length >= 3 && (
        <div className="">
          <div className={style.block_search_products}>
            {products.length && products.length >= 1 ? (
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
