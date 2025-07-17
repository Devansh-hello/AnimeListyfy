import AnimeCard from "../Components/AnimeCard"
import { useState } from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const animes =[
        {id:1, title: "One Piece", release_date: "1998", url: "https://cdn.myanimelist.net/images/anime/1168/148347l.webp"},
        {id:2, title: "Demon Slayer", release_date: "2015", url: "https://cdn.myanimelist.net/images/anime/1168/148347l.webp"},
        {id:3, title: "Mushoku Tensei", release_date: "2000", url: "https://cdn.myanimelist.net/images/anime/1168/148347l.webp"}
    ]

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)
    }
    return (
        <div className="flex flex-col grow items-center gap-6">
            
            <div className=" flex  text-3xl m-3 p-3 font-sans font-bold drop-shadow-2xl ">
                <h1>Anime List</h1>
            </div>

            <div className="flex flex-row justify-center gap-6 items-center">
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