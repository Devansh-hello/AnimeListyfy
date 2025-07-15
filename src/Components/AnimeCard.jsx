
function AnimeCard({anime}){

    function onFavoriteClick(){
        alert("Favorated")
    }


    return(
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl m-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

            <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden"> 
                <img src={anime.url} alt={anime.title} class="h-full w-full rounded-md md:rounded-lg object-cover"/>
                <div className="object-contain w-40 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
                    <button className="favorate-button" onClick={onFavoriteClick}>❤️</button>
                </div>
            </div>

            <div className="flex flex-col justify-between p-4 leading-normal"> 
                <h3>{anime.title}</h3>
                <p>{anime.release_date}</p>
            </div>
            
        </div>
    )
}

export default AnimeCard