import React from "react";

import app_store from "../../assets/icons/app_store_footer.svg";
import google_play from "../../assets/icons/google_play_footer.svg";
import vk from "../../assets/icons/vk.svg";
import youtube from "../../assets/icons/youtube.svg";
import class_mates from "../../assets/icons/class_mates.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const aboutUs: string[] = [
    "React Pizza",
    "О нас",
    "Пицца-книга",
    "Блог «сила ума»",
  ];

  const work: string[] = ["Работа", "В пиццерии"];

  const partners: string[] = [
    "Партнерам",
    "Франшиза",
    "Инвестиции",
    "Поставщикам",
    "Предложить помещение",
  ];

  const thisIsInteresting: string[] = [
    "Это интересно",
    "Почему мы готовим без перчаток? ",
    "Эскурсии и мастер-классы",
    " Корпоративные закзаы",
  ];

  const secondInfo: string[] = [
    "REACT PIZZA",
    "© 2024",
    "Правовая информация",
    "Калорийность и состав",
    "Помощь",
  ];

  const platformInstall: { route: string; img: string }[] = [
    { route: "https://www.apple.com/fr/app-store", img: app_store },
    { route: "https://play.google.com", img: google_play },
  ];

  const socialNetworks: { route: string; img: string }[] = [
    { route: "https://ok.ru", img: class_mates },
    { route: "https://vk.com", img: vk },
    { route: "https://www.youtube.com", img: youtube },
  ];

  return (
    <div className="bg-[#181818] text-white">
      <div className="container py-[30px] ">
        <div className="flex justify-between">
          {/* О нас */}
          <div>
            {aboutUs.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "mb-[7px]"
                    : "mb-[9px] text-[#B9B9B9] cursor-pointer hover:text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          {/* О нас */}

          {/* О работе */}
          <div>
            {work.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "mb-[7px]"
                    : "mb-[9px] text-[#B9B9B9] cursor-pointer hover:text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          {/* О работе */}

          {/* Партнерам */}
          <div>
            {partners.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "mb-[7px]"
                    : "mb-[9px] text-[#B9B9B9] cursor-pointer hover:text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          {/* Партнерам */}

          {/* Это интересно */}
          <div>
            {thisIsInteresting.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "mb-[7px]"
                    : "mb-[9px] text-[#B9B9B9] cursor-pointer hover:text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          {/* Это интересно */}

          {/* Платформы установки */}
          <div>
            <div className="flex mb-[25px]  items-center">
              {platformInstall.map((item, index) => (
                <Link to={item.route} key={index} target="_blank">
                  <img
                    src={item.img}
                    alt="platform"
                    className="w-[135px] h-[40px]"
                  />
                </Link>
              ))}
            </div>
            <div className="text-right text-[#B9B9B9] cursor-pointer hover:text-white">
              reactPizza@gmail.com
            </div>
          </div>
          {/* Платформы установки */}
        </div>

        <div className="flex justify-between items-center mt-20">
          {/* Вторичная информация */}
          <div className="flex gap-3 ">
            {secondInfo.map((item, index) => (
              <div
                key={index}
                className="text-[#B9B9B9] cursor-pointer hover:text-white"
              >
                {item}
              </div>
            ))}
          </div>
          {/* Вторичная информация */}

          {/* Соц сети */}
          <div className="flex gap-3">
            {socialNetworks.map((item, index) => (
              <Link
                target="_blank"
                to={item.route}
                key={index}
                className={`h-[38px] ml-2 p-2 rounded  bg-[#C4C4C433] ${
                  index == 0 ? "w-[35px] h-[30px]" : "w-[38px]"
                }`}
              >
                <img
                  alt="social"
                  key={index}
                  src={item.img}
                  className="w-full h-full"
                />
              </Link>
            ))}
          </div>
          {/* Соц сети */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
