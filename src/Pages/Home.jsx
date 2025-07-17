import AnimeCard from "../Components/AnimeCard"
import { useState, useEffect, use } from "react"
import { getPopularAnime, searchAnime } from "../services/api";
import NavBar from "../Components/NavBar";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const [animes, setAnime] = useState([]);

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(true)
    
    const handleSearch = async (query) => {
    setLoading(true);
        try {
            const results = await searchAnime(query);
            setAnime(results); 
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Failed to search anime.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const loadPopularAnime = async () =>{
            try{
                const popularAnime = await getPopularAnime()
                setAnime(popularAnime)
            }catch (err){
                console.log(err)
                setError("Failed to load.....")
            }finally{
                setLoading(false)
            }
        }
        loadPopularAnime()
    },[])

    
    return (
        <div className="flex flex-col items-center ">
            <NavBar onSearch={handleSearch} />

            <div className=" flex  text-3xl m-3 p-3 font-sans font-bold drop-shadow-2xl ">
                <h1>Anime List</h1>
            </div>

            {error && <div className="">{error}</div>}

            {loading ? (
                <div className="">
                    loading.....
                </div>
            ):<div className="flex flex-row flex-wrap justify-center gap-4 items-center ">
                {
                    animes.map( (anime) => (
                        <AnimeCard anime={anime} key={anime.id} />
                    ))
                }
            </div>}

            

        </div>
    )
}

export default Home