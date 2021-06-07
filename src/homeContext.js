import React, { useContext, createContext, useEffect, useState } from 'react';

const HomeContext = createContext();

const TCART_API = 'https://tcartapi.herokuapp.com/api?limit=12';

const HomeProvider = ({ children }) => {

    const [loading,setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    const fetchProducts = async (url) => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            let newData = data.products.map((item) => {
                item["amount"] = 1;
                return item;
            })
        setProducts(newData);         
            setLoading(false);
            console.log(loading);
        } catch (error) {
            console.log(error);
            setLoading(false)   
        }
    }

    useEffect(() => {
        fetchProducts(TCART_API);
    }, []);

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