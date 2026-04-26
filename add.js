document.getElementById("songForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;

    const songData = {
        title,
        artist
    };

    try {
        await fetch("http://localhost:3000/api/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(songData)
        });

        alert("Song added successfully!");
        window.location.href = "index.html";

    } catch (error) {
        console.log(error);
    }
});