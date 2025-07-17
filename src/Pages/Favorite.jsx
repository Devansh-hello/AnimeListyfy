import NavBar from "../Components/NavBar"

function Favorite(){
    return(
        <div className="flex flex-col h-150 justify-center items-center">
            
            <div className="flex flex-col justify-center items-center w-200 h-32 self-center border-1 rounded-full text-3xl self-center backdrop-blur-lg bg-white/5 drop-shadow-2xl inset-shadow-amber-100">

            <h2>No Favorite Anime Yet.</h2>
            <p>Start adding shows/movies to your favorites</p>

            </div>
        </div>
        
    )
}
export default Favorite