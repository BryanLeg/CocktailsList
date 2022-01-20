export default () => {
  const btns = document.querySelectorAll("a");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem("id", btn.dataset.id);
    });
  });
};
