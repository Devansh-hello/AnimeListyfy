
import { Link } from "react-router-dom"
import { useState } from "react"
import { searchAnime } from "../services/api";

function NavBar(){
    const [searchQuery, setSearchQuery] = useState("");

    const [animes, setAnime] = useState([]);

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(true)

    const handleSearch = async (e) =>{
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await searchAnime(searchQuery)
            setAnime(searchResults)
            setError(null)
        
        }
        catch(err){
            console.log(err)
            setError("failed to search Anime....")
        }
        finally{
            setLoading(false)
        }
        setSearchQuery("")
    }

    return  (
            <nav className="flex flex-row w-screen items-center justify-between gap-6 bg-[#131316f3] shadow-lg shadow-black p-5 backdrop-blur-sm ">

                <div className="flex items-end text-2xl">
                    
                    <Link to="/">
                        Anime Site
                    </Link>

                </div>

                <div className="flex flex-row gap-6 order-2 text-[#d1ccdc] text-large p-2">

                    <Link to = "/" className="hover:text-[#f5edf0]">
                        Home
                    </Link>

                    <Link to ="/favorite" className="hover:text-[#f5edf0]">
                        Favorites
                    </Link>

                </div>
                
                <div>
                    <form onSubmit={handleSearch} className="flex flex-row items-center justify-center bg-gray-900/10 bg border border-gray-400 rounded-full pb-4 pt-4 pl-20 pr-20 text-center shadow-lg shadow-amber-50/10 hover:scale-110 transition duration-180 delay-120">
                        <input   
                        type="text" 
                        placeholder="Search Anime Titles" 
                        className="focus:outline-0"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        >  </input>
                
                        <button  type="submit" className="border-1 rounded-full pl-2 pr-2 w-full">Search</button>
                    </form>
                </div>
            </nav>
            );
}
export default NavBar