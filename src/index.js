const body = document.body;
const buttons = body.querySelectorAll(".rep_section");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    const targetTab = e.target;
    const targetTabContentId = targetTab.dataset.bsTarget;
    const targetTabContent = document.querySelector(targetTabContentId);

    buttons.forEach((button) =>{
      button.classList.remove('active');
      const textId = button.dataset.bsTarget;
      const targetC= document.querySelector(textId);
      targetC.classList.remove('active__text');
    })

    button.classList.add('active');
    targetTabContent.classList.add('active__text');
  });
});
