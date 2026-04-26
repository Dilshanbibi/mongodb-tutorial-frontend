fetch("http://localhost:3000/api/songs")
  .then(response => response.json())
  .then(data => {
    const songList = document.getElementById("songList");

    data.forEach(song => {
      const li = document.createElement("li");
      li.textContent = `${song.title} - ${song.artist}`;
      songList.appendChild(li);
    });
  })
  .catch(error => console.log(error));