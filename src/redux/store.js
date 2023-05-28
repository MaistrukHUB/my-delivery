import { configureStore } from '@reduxjs/toolkit'

import ItemsShopsSlice from './Slices/ItemsShopsSlice'
import ShopsSlice from './Slices/ShopsSlice'
import SelectedShopSlice from './Slices/SelectedShopSlice'
import CartSlice from './Slices/CartSlice'


export const store = configureStore({
	reducer: {
		ShopsSlice,
		ItemsShopsSlice,
		SelectedShopSlice,
		CartSlice
	},
})

