// import { useReducer } from "react"
import { Type } from './Actiontype'

export const initialState = {
  basket: [],
  user:null,
};

export const reducer = (state, action) =>{
    switch (action.type) {
      case Type.ADD_TO_BASKET:
        //   case "ADD_TO_BASKET":
        // return {
        //   ...state,
        //   basket: [...state.basket, action.item],
        // };
        // check if item exists
        const existingItem = state.basket.find(
          (item) => item.id === action.item.id
        );
        // console.log("Action item ID:", action.item.id);
        // console.log("Existing item:", existingItem);
        if (!existingItem) {
          // console.log("Adding new item to basket:", action.item);
          return {
            ...state,
            basket: [...state.basket, { ...action.item, amount: 1 }],
          };
         
        } else {
          const updatedBasket = state.basket.map((item) => {
            return item.id === action.item.id
              ? { ...item, amount: item.amount + 1 }
              : item;
          });
          //  console.log("Updating existing item in basket:", updatedBasket);
          return {
            ...state,
            basket: updatedBasket,
          };
        }
        case Type.REMOVE_FROM_BASKET:
          const index =state.basket.findIndex(item =>item.id===action.id)
          let newBasket = [...state.basket]
          if(index>=0){
            if(newBasket[index].amount>1){
              newBasket[index]={...newBasket[index],amount:newBasket[index].amount-1}
            }else{
              newBasket.splice(index,1)
            }
          }
          return{
            ...state,
            basket:newBasket
    }
    case Type.SET_USER:
      return{
        ...state,
        user:action.user
      }

      default:
        return state;
    }

};


