import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit"

const initialState = {
	selectedShop: "",

}

//if we make slice need import this method from "@reduxjs/toolkit"
const SelectedShopSlice = createSlice({
	name: 'selectedShop',
	initialState,
	//methods from reducers == actions
	reducers: {
		setSelectedShops(state, action) {
			state.selectedShop = action.payload
		},
	}


})

//select so as not to repeat the code
export const selectShops = (state) => state.SelectedShopSlice

//in filterSlice.actions  are stored all actions
export const { setSelectedShops } = SelectedShopSlice.actions

export default SelectedShopSlice.reducer