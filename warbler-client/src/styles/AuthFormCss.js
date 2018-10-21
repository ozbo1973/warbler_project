import { main_btns, main_form_root } from "./MainCss";

export default theme => ({
  form_root: main_form_root,
  paper: {
    ...theme.mixins.gutters(),
    margin: "1rem auto",
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: "60%"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50%",
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
