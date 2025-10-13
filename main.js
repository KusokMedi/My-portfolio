document.addEventListener("DOMContentLoaded", () => {
  console.log("%cДобро пожаловать на сайт Матвея!", "color:#00b4d8;font-weight:bold;");
  
  // Легкий эффект анимации логотипа
  const logo = document.querySelector(".logo");
  setInterval(() => {
    logo.classList.toggle("pulse");
  }, 3000);
});
