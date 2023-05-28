import { PayloadAction, createSlice } from "@reduxjs/toolkit"




const initialState = {
	cart: [],
	totalPrice: 0,
}

const updateTotalPrice = (state) => {
	state.totalPrice = state.cart.reduce((sum, obj) => {
		return (obj.price * obj.count) + sum
	}, 0)


}



const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(state, action) {
			const findProduct = state.cart.find(obj => obj.id === action.payload.id)
			if (findProduct) {
				findProduct.count++
			} else {
				state.cart.push({
					...action.payload,
					count: 1
				})
			}
			updateTotalPrice(state)
		},
		minusProduct(state, action) {
			const findProduct = state.cart.find(obj => obj.id === action.payload.id)
			if (findProduct && findProduct.count <= 1) {
				state.cart = state.cart.filter((obj) => obj.id !== action.payload.id)
			} else if (findProduct && findProduct.count > 1) {
				findProduct.count--
			}
			updateTotalPrice(state)
		},
		removeProduct(state, action) {
			state.cart = state.cart.filter((obj) => obj.id !== action.payload.id)
			updateTotalPrice(state)
		},
		clearCart(state) {
			state.cart = []
			updateTotalPrice(state)
		}
	}
})


//in filterSlice.actions  are stored all actions
export const { addProduct, removeProduct, minusProduct, clearCart } = CartSlice.actions

export default CartSlice.reducer