import { main_btns } from "./MainCss";

export default theme => ({
  useraside_card: {
    minWidth: "275px"
  },
  useraside_img: {
    height: "140px"
  },
  useraside_title: {
    color: "#39CA9D",
    fontWeigth: "bold",
    fontSize: "1.3rem"
  },
  useraside_cardaction: {
    display: "flex",
    justifyContent: "flex-end"
  },
  useraside_btn: main_btns,
  useraside_btn_other: {
    margin: ".2rem",
    color: "#48BCC3",
    backgroundColor: "inherit",
    fontWeigth: "800"
  }
});
