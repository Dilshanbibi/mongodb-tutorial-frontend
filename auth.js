const auth = localStorage.getItem("auth");

if (auth !== "1") {
    window.location.href = "login.html";
}