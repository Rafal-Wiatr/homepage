console.log("Hello guest");


let body = document.querySelector(".body");

let buttonTheme = document.querySelector(".buttonTheme");

let themeName = document.querySelector(".themeName");

let color = document.querySelector("color");

buttonTheme.addEventListener("click", () => {
    body.classList.toggle("bodyDark");

    if (body.classList.contains("bodyDark")) {
        themeName.innerText = "Jasny";
    } else {
        themeName.innerText = "Ciemny";
    }
});

