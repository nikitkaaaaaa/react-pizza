import React, { useEffect, useState } from "react";

import "./loading.css";
import { useLocation } from "react-router-dom";
import routes from "../../routes/routes";

const Loading = () => {
  const [isOrdersPage, setIsOrderPage] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === routes.orders) {
      setIsOrderPage(true);
    } else {
      setIsOrderPage(false);
    }
  }, [location]); // проверка  находится ли пользователь на странце просмотра оплаченных заказов (из-за того, что зачастую оплаченных заказов не так уж и много, контента не хватает для появления сбоку полосы проктрутки, которая занимает свою ширину, отсюда во время анимации  загрузки появляется неприятная тряска экрана )

  return (
    <div className={`mt-40 ${!isOrdersPage && "min-h-screen"}`}>
      <div id="circularG">
        <div id="circularG_1" className="circularG"></div>
        <div id="circularG_2" className="circularG"></div>
        <div id="circularG_3" className="circularG"></div>
        <div id="circularG_4" className="circularG"></div>
        <div id="circularG_5" className="circularG"></div>
        <div id="circularG_6" className="circularG"></div>
        <div id="circularG_7" className="circularG"></div>
        <div id="circularG_8" className="circularG"></div>
      </div>
    </div>
  );
};

export default Loading;
