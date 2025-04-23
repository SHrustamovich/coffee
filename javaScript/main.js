const btn = document.querySelector(".burger");

const list = document.querySelector("nav");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    list.classList.toggle("show");
});

console.log("salom");
