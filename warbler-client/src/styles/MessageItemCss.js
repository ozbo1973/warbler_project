import { main_btns } from "./MainCss";

export default theme => ({
  msgItem_text: {
    margin: "0 2rem",
    fontSize: "1.2rem"
  },
  msgItem_username: {
    fontWeight: "bolder"
  },
  msgItem_time: {
    textDecoration: "underline"
  },
  deleteIcon: {
    color: "#E80D39"
  },
  btns: main_btns,
  msgItem_btns: {
    backgroundColor: "inherit"
  }
});
