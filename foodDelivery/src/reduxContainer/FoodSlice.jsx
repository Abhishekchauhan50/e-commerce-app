import {createSlice} from '@reduxjs/toolkit'





const foodslice = createSlice({
    name:'signup',
    initialState:{
        signup:[{userName: 'abhi',}],
        
    },
    reducers:{
        signUp: (state,action)=>{
            state.signup.push(action.payload)
        },
        login: (state,action)=>{
            state.signup.push(action.payload)
        },
        
    }
    
})

const cardSlice = createSlice({
    name: 'cardList',
    initialState:{
        card:[]
    },
    reducers:{
        addCard: (state, action)=>{
            state.card.push(action.payload)
        }
    }
})

const detailSlice = createSlice({
    name: 'detailpage',
    initialState:{
        detailData:[]
    },
    reducers:{
        showDetail: (state, action)=>{
            state.detailData.push(action.payload)
        }
    }
})

const addCartSlice = createSlice({
    name:'addToCart',
    initialState:{
        cartList:[]
    },
    reducers:{
        AddToCart: (state, action)=>{
            state.cartList.push(action.payload)
        },
        RemoveToCart: (state, action)=>{
            state.cartList = state.cartList.filter((val,index)=>{
                return index !== action.payload
            })

        }
    }
})


export const AddCartslice = addCartSlice.reducer
export default foodslice.reducer;
export const cardslice = cardSlice.reducer
export const detailslice = detailSlice.reducer



export const {AddToCart, RemoveToCart} = addCartSlice.actions
export const {showDetail} = detailSlice.actions
export const {addCard} = cardSlice.actions
export const {signUp, login} = foodslice.actions

