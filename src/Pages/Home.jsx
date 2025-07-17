import AnimeCard from "../Components/AnimeCard"
import { useState, useEffect, use } from "react"
import { getPopularAnime, searchAnime } from "../services/api";


function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const [animes, setAnime] = useState([]);

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(true)
    
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

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)
    }
    return (
        <div className="flex flex-col grow items-center gap-6">
            
            <div className=" flex  text-3xl m-3 p-3 font-sans font-bold drop-shadow-2xl ">
                <h1>Anime List</h1>
            </div>

            <div className="flex flex-row justify-center gap-6 items-center flex-wrap">
                {
                    animes.map( (anime) => (
                        <AnimeCard anime={anime} key={anime.id} />
                    ))
                }
            </div>

        </div>
    )
}

export default Home