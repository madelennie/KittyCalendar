import React, {useState, createContext} from "react";

export const KittenContext = createContext();

// Här gör vi en egen context som kallas KittenContext
// Med KittenContext kan vi göra en provider i vår komponentn

// Vi gör nu en komponent.

export const KittenStoreProvider = (props) => {
    // const blankCat = { name: '', sex: '', weight: '' };

    const [catState, setCatState] = useState([
        {  name: '', sex: '', weight: '', litter: '', breed: '' },
    ]);

    // Här har vi istället hela våran catState.
    // Detta får att vi senare kommer använda context för att förse App och alla Apps children med KittenStore statet.


    //KittenStore är egentligen bara en Higher order component som förser sin logik till sina barn komponentent

    return ( 
        <KittenContext.Provider value={[catState, setCatState]}> {props.children} </KittenContext.Provider>

        // Nu använder vi våran KittenContext som vi gjorde med createContext
        // Alla context har en Provider 
        // NU delar vi med vårat Value till våra children
    )

}
