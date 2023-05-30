import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit"
import axios from "axios";




export const fetchShopsItems = createAsyncThunk(
	'shopsItems/fetchProducts',
	async () => {
		// const { selectedCategory, searchValue } = params
		const { data } = await axios.get(`https://my-delivery-backand.onrender.com/shopsItems`)
		return data
	}
)




const initialState = {
	shopsItems: [],

}


//if we make slice need import this method from "@reduxjs/toolkit"
const ItemsShopsSlice = createSlice({
	name: 'shopsItems',
	initialState,
	//methods from reducers == actions
	reducers: {
		setshopsItems(state, action) {
			state.shopsItems = action.payload
		},
	},

	// варіант який написанийнижче використовується без застосування ts 
	extraReducers: {
		[fetchShopsItems.pending]: (state) => {
			state.shopsItems = []
		},
		[fetchShopsItems.fulfilled]: (state, action) => {
			state.shopsItems = action.payload
		},
		[fetchShopsItems.rejected]: (state) => {
			state.shopsItems = []
		}
	}
})

//select so as not to repeat the code
export const selectshopsItems = (state) => state.ItemsShopsSlice

//in filterSlice.actions  are stored all actions
export const { setShopsItems } = ItemsShopsSlice.actions

export default ItemsShopsSlice.reducer