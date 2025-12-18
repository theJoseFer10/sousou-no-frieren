document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector("#carrusel #track");
    const clones = track.innerHTML;
    track.innerHTML += clones;
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector("#carrusel2 #track2");
    const clones = track.innerHTML;
    track.innerHTML += clones;
});

