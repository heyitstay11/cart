import React, { useContext, createContext, useEffect, useState, useCallback } from 'react';

const HomeContext = createContext();

const HomeProvider = ({ children }) => {

    const [loading,setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch('https://tcartapi.herokuapp.com/api?limit=12');
            const data = await res.json();
            let newData = data.products.map((item) => {
                item["amount"] = 1;
                return item;
            })
        setProducts(newData);         
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false)   
        }
    },[]) 
    
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return <HomeContext.Provider value={{
        loading,
        products
    }}>
        { children }
    </HomeContext.Provider>
}

const useHomeContext = () => {
    return useContext(HomeContext);
}

export {HomeContext, HomeProvider, useHomeContext};