document.addEventListener('DOMContentLoaded', () => {
    const DataAnime = document.getElementById("data-anime");

    async function GetDataAPI() {
        const url = "https://api.jikan.moe/v4/anime/52991";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                DataAnime.innerHTML = '<p>No se pudo obtener la info.</p>';
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const Data = await response.json();
            const anime = Data.data;

            // Usamos una constante para la sinopsis por seguridad
            const shortSynopsis = anime.synopsis 
                ? anime.synopsis.substring(0, 300) 
                : "No hay sinopsis disponible";

            DataAnime.innerHTML = `
                <div class="anime-card">
                    <div class="anime-header">
                        <img src="${anime.images.webp.large_image_url}" alt="${anime.title}" class="anime-img">
                        <div class="anime-main-info">
                            <h2>${anime.title}</h2>
                            <p class="japanese-title"><em>${anime.title_japanese}</em></p>
                            <div class="stats-container">
                                <div class="stat-box">
                                    <span class="stat-label">Calificación</span>
                                    <span class="stat-value highlight">⭐ ${anime.score}</span>
                                </div>
                                <div class="stat-box">
                                    <span class="stat-label">Ranking</span>
                                    <span class="stat-value">#${anime.rank}</span>
                                </div>
                                <div class="stat-box">
                                    <span class="stat-label">Episodios</span>
                                    <span class="stat-value">${anime.episodes}</span>
                                </div>
                                <div class="stat-box">
                                    <span class="stat-label">Genero</span>
                                    ${anime.genres.map(g => `<span class="genre-tag">${g.name}</span>`).join(' ')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

        } catch (error) {
            console.error("Error al procesar:", error);
            DataAnime.innerHTML = '<p>Error de conexión con el servidor.</p>';
        }
    }

    GetDataAPI();
});