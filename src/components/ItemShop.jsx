import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/Slices/CartSlice";



const ItemShop = ({ item }) => {



	const dispatch = useDispatch()

	const addItemShop = (item) => {
		const newItemToCart = {
			...item,
			count: 0
		}
		dispatch(addProduct(newItemToCart))
	}

	return (
		<div className="itemShop">

			<div className="itemShop-img">img</div>
			<div className="itemShop-name">{item.name} : {item.type} </div>
			<div
				className="itemShop-button"
				onClick={() => addItemShop(item)}
			>
				add item
			</div>
		</div>
	)
}

export default ItemShop