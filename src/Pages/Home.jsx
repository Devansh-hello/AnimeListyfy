import AnimeCard from "../Components/AnimeCard"
import { useState } from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const animes =[
        {id:1, title: "One Piece", release_date: "1998"},
        {id:2, title: "Demon Slayer", release_date: "2015"},
        {id:3, title: "Mushoku Tensei", release_date: "2000"}
    ]

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="Search-bar">
                <input 
                type="text" 
                placeholder="Search Anime Titles" 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
                
                <button  type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-grid">
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