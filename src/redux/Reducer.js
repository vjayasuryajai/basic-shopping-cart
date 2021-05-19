
import {ADD_CART, REMOVE_CART} from './Action'
import {combineReducers} from 'redux'

const InitialState ={


    CartItem : []
}

 const rootreducer =(state=InitialState, action) =>{
 //console.log(action.type)
      switch(action.type){
        
        case ADD_CART:
      //   console.log(action.payload)
        // console.log(state.CartItem)
         const item = state.CartItem.filter(flterData=> action.payload.id === flterData.id)
        // console.log(item)
          if(!item.length)
             { 
            action.payload.quantity =1
             return{
             ...state.CartItem,
             CartItem: [...state.CartItem,action.payload]
                   }
               }

          else {
            action.payload.quantity +=1
            return {...state}
               }


               case REMOVE_CART:
                   console.log("remove")
         // const item =
               return{
                ...state.CartItem,
                CartItem: state.CartItem.filter(flterData=> action.payload.id !== flterData.id)
                   
               }


    
        default : return state

  }



}


export  const allreducer = combineReducers({

    root :rootreducer
})
