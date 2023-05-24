import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from './Slices/filterSlice'
import cartSlice from './Slices/cartSlice'
import productsSlice from './Slices/productsSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
	reducer: {
		filtersSlice,
		cartSlice,
		productsSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch