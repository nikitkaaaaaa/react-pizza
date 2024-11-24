import React from "react";

const Stories = () => {
  const stories: string[] = [
    "https://cdn.inappstory.ru/story/vjb/uij/hbr/do5iyfirjjfmn169h2ur0d6/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=469854062",
    "https://cdn.inappstory.ru/story/5lp/2n6/iwe/i96lhrl9kxs2h6et3s5nray/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=2574055663",
    "https://cdn.inappstory.ru/story/edk/56s/xtu/xwfqg9e4p1kekb4js4nci9r/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=1118430702",
    "https://cdn.inappstory.ru/story/tw6/lbv/lbx/7kwcv1ftqvjwpeiekhwq211/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=2763111118",
    "https://cdn.inappstory.ru/story/rzl/mw1/xx1/zzs8q9u7wl3xhew9utqyurt/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=3527397074",
    "https://cdn.inappstory.ru/story/cqh/gkd/51j/iuxtnbvrl8q6ikoyt4sweri/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=966970626",
  ];

  return (
    <div className="flex justify-between">
      {stories.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="stories"
          className="w-[205px] rounded-xl opacity-80"
        ></img>
      ))}
    </div>
  );
};

export default Stories;
