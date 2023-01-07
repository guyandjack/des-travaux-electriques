//Creation d' un context pour la transfer  d'info entre  sous-menu du header et menu du banner slide

//Import des "hooks"
import { useState, createContext } from "react";

const ContextNav = createContext();


 function NavContextProvider({children}) {

    const [isClicked, setIsClicked] = useState(false);

    
    return (
        <ContextNav.Provider value={{ isClicked, setIsClicked }}>
            {children}
        </ContextNav.Provider>
    )
}

export { ContextNav, NavContextProvider };