
import { Link } from "react-router-dom"


function NavBar(){
    return  (
            <nav className="bg-black h-f w-f  p-4 flex flex-row gap-5 m-4 rounded-full shadow-md shadow-violet-400">

                <div className="items-center text-blue-600 text-2xl font-mono m-2 flex ">
                    
                    <Link to="/">
                        Anime Site
                    </Link>

                </div>

                <div className="flex-grow flex  flex-row justify-center items-center gap-2 font-mono ">

                    <Link to = "/" className="bg-gray-300 rounded-large p-1.5 shadow-md shadow-white/40">
                        Home
                    </Link>

                    <Link to ="/favorite" className="bg-gray-300 rounded-large p-1.5 shadow-md shadow-white/40 backdrop-blur-sm ">
                        Favorites
                    </Link>

                </div>
                <div className="w-[80px]">{/* Optional right spacer */}</div>
            </nav>
            );
}
export default NavBar