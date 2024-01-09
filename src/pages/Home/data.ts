import { LinkProps } from "../../type";

interface HomeBtnData {
  btns: LinkProps[];
}


export const HomeBtn: HomeBtnData = {
  btns: [
    { label: "Shop now", url: "/shop" },
  ],
};
