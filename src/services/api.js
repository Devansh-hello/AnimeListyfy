const API_URL = "https://api.jikan.moe/v4"


export const getPopularAnime = async () => {
    const respone = await fetch(`${API_URL}/top/anime`);
    const data = await respone.json()
    return data.data
};

export const searchAnime = async (query) => {
    const respone = await fetch(`${API_URL}/anime?q=${encodeURIComponent(query)}`);
    const data = await respone.json()
    return data.data
};