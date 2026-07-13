window.addEventListener("load", function () {
    alert("أهلاً بك في موقعنا ❤️");
});


var topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

var darkBtn = document.querySelector("#darkBtn");
var mode = localStorage.getItem("mode");

if (mode === "dark") {
    document.body.classList.add("dark-mode");
}


darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }

});

var form = document.querySelector("#contactForm");

form.addEventListener("submit", (x) => {

    x.preventDefault();

    var fullName = document.querySelector("#fullName").value;
    var email = document.querySelector("#email").value;
    var subject = document.querySelector("#subject").value;
    var messageText = document.querySelector("#message").value;

    if (fullName.trim() === "") {
        alert("Please enter your full name.");
    }
    else if (fullName.trim().length < 3) {
        alert("Name must be at least 3 characters.");
    }
    else if (email.trim() === "") {
        alert("Please enter your email.");
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
    }
    else if (subject.trim() === "") {
        alert("Please enter the subject.");
    }

    else if (messageText.trim() === "") {
        alert("Please enter your message.");
    }

    else {
        alert("Form submitted successfully!");

        form.reset();
        counter.textContent = "0 / 500";
    }

});
var message = document.querySelector("#message");
var counter = document.querySelector("#counter");

message.addEventListener("input", () => {

    counter.textContent = message.value.length + " / 500";

});
