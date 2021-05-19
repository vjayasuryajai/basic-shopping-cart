import {ADD_CART,REMOVE_CART} from './Action'

export const addCart =(item)=>{
      return{
         type: ADD_CART,
        payload: item,
        quantity : 1
    }
}


export const removeCart =(item)=>{
    console.log("remove")
    return{
       type: REMOVE_CART,
      payload: item,
      quantity : 1
  }
}