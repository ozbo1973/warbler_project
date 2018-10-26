import { main_btns, main_background } from "./MainCss";

export default theme => ({
  form_root: main_background,
  form_paper: {
    margin: "1rem auto",
    textAlign: "center",
    color: theme.palette.text.secondary,
    minWidth: "75%",
    padding: "1rem"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "65%",
    margin: "0 auto"
  },
  heading: {
    margin: "2rem 0 1rem 0"
  },
  controls: {
    margin: "1rem 0"
  },
  btn: main_btns
});
