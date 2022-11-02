import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PriceContext = createContext();

function PriceContextProvider(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        (async function () {
            const req = await axios.get(
                "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=brl"
                );
                setData(req.data["matic-network"].brl);
            })();
        }, []);

  useEffect(() => setLoading(false), [data]);
  return (
    <PriceContext.Provider value={{data, loading}}>
        {props.children}
    </PriceContext.Provider>
  )
}

export default PriceContextProvider;
