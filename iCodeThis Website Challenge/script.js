// Faq accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const faqGroupHeader = e.target.closest(".faq-group-header");

    if (!faqGroupHeader) return;

    const group = faqGroupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = faqGroupHeader.querySelector("i");

    //Toggle Icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    //toggle answers
    groupBody.classList.toggle("open");

    //close all other questions besides this one
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

//Hamburger-menu
const hamburgerBtn = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerBtn.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("active");
});
