import {configureStore} from '@reduxjs/toolkit'
import FoodSlice, { AddCartslice, cardslice, detailslice }  from './FoodSlice'
import {combineReducers} from '@reduxjs/toolkit'




const  rootReducers = combineReducers({
    signup: FoodSlice,
    cardList: cardslice,
    detailList: detailslice,
    cartList: AddCartslice
    

})


export const Store = configureStore({
    reducer: rootReducers
})

