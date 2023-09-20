export const handelClick = () => {
  console.log("clicked");
  history.pushState(null, null, "/about");
  window.dispatchEvent(new Event("popstate"));
};
