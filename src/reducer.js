const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAR_CART':
            return {...state, cart: [] }
        case 'REMOVE':{
            return {...state, cart: state.cart.filter(item =>{
                return item.id !== action.payload
            })}}
        case 'INCREASE':{
            let tempCart = state.cart.map((item) => {
                if(item.id === action.payload){
                   return {...item, amount: item.amount + 1}
                }
                return item
            })
            return {...state, cart: tempCart}
        }
        case 'DECREASE': {
            let tempCart = state.cart.map((item) => {
                if(item.id === action.payload){
                   return {...item, amount: item.amount - 1}
                }
                return item
            }).filter(item => item.amount !== 0)
            return {...state, cart: tempCart}
        }
        case 'GET_TOTAL':{
            let total = state.cart.reduce((acc, item) => {
                let {price, amount } = item ;
                acc +=  price * amount
                return acc;
            },0)
            let amount = state.cart.reduce((acc, item) => {
                let { amount } = item ;
                acc += amount
                return acc;
            },0)
            return {...state, total, amount}
        }
        case 'CREATE':{
            let item =  action.payload;
            return {...state, cart : [...state.cart, item]};
        }
        default:
            return state
    }
}

// Another way to increment and decrement
// if(action.type === 'INCREASE'){
//     let tempCart = state.cart.map((item) => {
//         if(item.id === action.payload){
//          return Object.assign({}, item, {amount : item.amount + 1} )
//         }
//         return item
//     })
//     return {...state, cart: tempCart}
// }

export default reducer;