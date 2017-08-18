alert("I am evil");

let eve = document.body.querySelectorAll("*");
for (let value of eve) {
    value.style.transform = "rotate(105deg)";
}