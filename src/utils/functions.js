export const handelClick = () => {
  console.log("clicked");
  history.pushState(null, null, "/about");
  window.dispatchEvent(new Event("popstate"));
};

export const handleChangePlayerOneName = (e) => {
  localStorage.setItem("playerOneName", e.target.value);
};

export const handleChangePlayerTwoName = (e) => {
  localStorage.setItem("playerTwoName", e.target.value);
};
