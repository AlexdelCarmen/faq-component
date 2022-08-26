const allArrows = document.querySelectorAll(".faq-arrow");
const allQuestions = document.querySelectorAll(".faq-question");

allQuestions.forEach((question) =>
  question.addEventListener("click", () => {
    question.childNodes[1].classList.toggle("flip");
    document.getElementById(question.dataset.code).classList.toggle("visible");
  })
);
