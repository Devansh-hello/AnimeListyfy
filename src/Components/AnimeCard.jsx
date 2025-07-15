
function AnimeCard({anime}){

    function onFavoriteClick(){
        alert("Favorated")
    }


    return(
        <div className="anime-card">

            <div className="anime-image"> 
                <img src={anime.url} alt={anime.title}/>
                <div className="image-overlay">
                    <button className="favorate-button" onClick={onFavoriteClick}>❤️</button>
                </div>
            </div>

            <div className="anime-info"> 
                <h3>{anime.title}</h3>
                <p>{anime.release_date}</p>
            </div>
            
        </div>
    )
}

export default AnimeCard