import { paper_container } from "./MainCss";

export default theme => ({
  root: paper_container,
  gutters: {
    ...theme.mixins.gutters()
  }
});
