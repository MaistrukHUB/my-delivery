import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit"
import axios from "axios";





export const fetchShops = createAsyncThunk(
	'shops/fetchShops',
	async () => {
		// const { data } = await axios.get(`https://64493955b88a78a8f0016922.mockapi.io/shops?sortBy=.[0]&order=desc&filter=${''}&search=${''}`)
		const { data } = await axios.get(`https://my-delivery-backand.onrender.com
		/shops`)
		return data
	}
)




const initialState = {
	shops: [],

}


//if we make slice need import this method from "@reduxjs/toolkit"
const ShopsSlice = createSlice({
	name: 'shops',
	initialState,
	//methods from reducers == actions
	reducers: {
		setShops(state, action) {
			state.shops = action.payload
		},
	},

	// варіант який написанийнижче використовується без застосування ts 
	extraReducers: {
		[fetchShops.pending]: (state) => {
			state.shops = []
		},
		[fetchShops.fulfilled]: (state, action) => {
			state.shops = action.payload
		},
		[fetchShops.rejected]: (state) => {
			state.shops = []
		}
	}
})

//select so as not to repeat the code
export const selectShops = (state) => state.ShopsSlice

//in filterSlice.actions  are stored all actions
export const { setShops } = ShopsSlice.actions

export default ShopsSlice.reducer