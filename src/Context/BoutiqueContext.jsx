import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const BoutiqueContext = createContext(null);

const BoutiqueContextProvider = (props) => {

    const contextValue = { all_product };

    return (
        <BoutiqueContext.Provider value={contextValue}>
            {props.children}
        </BoutiqueContext.Provider>
    )
}
export default BoutiqueContextProvider;