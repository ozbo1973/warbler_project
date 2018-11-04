import { paper_container } from "./MainCss";

export default theme => ({
  app_root: paper_container,
  app_gutters: {
    ...theme.mixins.gutters()
  }
});
