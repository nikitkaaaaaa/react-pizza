import { useEffect } from "react";

const useDisableScroll = (item: boolean) => {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "16px";
    } else {
      document.body.style.overflow = "";
      document.body.style.marginRight = "0px";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.marginRight = "0px";
    };
  }, [item]);
};

export default useDisableScroll;
