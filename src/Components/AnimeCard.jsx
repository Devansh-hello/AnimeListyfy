
function AnimeCard({anime}){

    function onFavoriteClick(){
        alert("Favorated")
    }


    return(
        <div className="flex flex-row basis-140 justify-center  items-center gap-0.5 m-2.5 p-2.5 border rounded-lg w-[400px] h-[220px]  backdrop-blur-md transition delay-150 duration-300 ease-in-out hover:scale-110 drop-shadow-2xl drop-shadow-amber-50/10 ">

            <div className="flex flex-row grow-2 w-full h-full group relative drop-shadow-md drop-shadow-amber-50/20"> 

                <img src={anime.images.webp.image_url} alt={anime.title_english} className="flex  border rounded-lg object-contain w-[200] h-[140] overflow-hidden transition delay-250 duration-300 ease-in-out hover:blur-[2px]"/>

                <div className="flex absolute justify-start hidden group-hover:block" >

                    <button className="cursor-pointer m-2" onClick={onFavoriteClick}>❤️</button>

                </div>
            </div>

            <div className="flex flex-col p-2 w-full h-full justify-center bold subpixel-antialiased font-bold font-stretch-condensed text-xl tracking-tight wrap-anywhere"> 
                <p className="text-[12px] text-[#8b8b8b]">{anime.title_japanese}</p>
                <h3>{anime.title_english}</h3>
                <p>IMDB: {anime.score}</p>
            </div>
            
        </div>
    )
}

export default AnimeCard