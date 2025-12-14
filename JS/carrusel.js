document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector("#carrusel #track");
    const clones = track.innerHTML;
    track.innerHTML += clones;
});
