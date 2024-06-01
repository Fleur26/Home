const buttons = document.querySelectorAll(".rep_section");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    buttons.forEach((l) => l.classList.remove("active"));
    button.classList.add("active");
  });
});
