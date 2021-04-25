const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART'){
        return {...state, cart: [] }
    }
    if(action.type === 'REMOVE'){
        return {...state, cart: state.cart.filter(item =>{
            return item.id !== action.payload
        } )}
    }
    if(action.type === 'INCREASE'){
        let tempCart = state.cart.map((item) => {
            if(item.id === action.payload){
               return {...item, amount: item.amount + 1}
            }
            return item
        })
        return {...state, cart: tempCart}
    }
    if(action.type === 'DECREASE'){
        let tempCart = state.cart.map((item) => {
            if(item.id === action.payload){
               return {...item, amount: item.amount - 1}
            }
            return item
        }).filter(item => item.amount !== 0)
        return {...state, cart: tempCart}
    }
    if(action.type === 'GET_TOTAL'){
        let total = state.cart.reduce((acc, item) => {
            let {price, amount } = item ;
            acc +=  price * amount
            return acc;
        },0)
        return {...state, total}
    }
    if(action.type === 'CREATE'){
        let item =  action.payload;
        return {...state, cart : [...state.cart, item]};
    }
    return state;
}

export default reducer;