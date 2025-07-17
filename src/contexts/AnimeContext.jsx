import { createContext, useState, useContext, useEffect } from "react";

const AnimeContext =createContext()

export const AnimeProvieder = ({children}) =>   {
    const [favorites, setFavorites] = useState([])

    useEffect(() =>{
        
    })
    return AnimeContext.Provider>
}