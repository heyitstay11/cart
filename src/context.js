import React, {useContext, useReducer, createContext, useEffect } from 'react'
//import cartItems from './cartData';
import reducer from './reducer'

const AppContext = createContext();

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
  }

const AppProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART' })
    }

    const remove = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }

    const increase = (id) => {
        dispatch({type: 'INCREASE', payload: id})
    }

    const decrease = (id) => {
       dispatch({type: 'DECREASE', payload: id})
    }

    const addItem = (item) => {
      let val = state.cart.find(obj => obj.id === item.id);
      if(val === undefined){
          dispatch({type: 'CREATE', payload : item})
          return;
      }   
      dispatch({type: 'INCREASE', payload: item.id})
    }

    useEffect(() => {
        dispatch({type: 'GET_TOTAL'})
    }, [state.cart])

    return <AppContext.Provider value ={{
        ...state,
        clearCart,
        remove,
        increase, 
        decrease,
        addItem,
    }}
    >
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};