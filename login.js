document.getElementById("loginBtn").addEventListener("click", async () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username2);
        localStorage.setItem("auth", data.off);

        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Login failed";
    }
});