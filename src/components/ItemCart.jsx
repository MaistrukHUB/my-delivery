import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { addProduct, removeProduct, minusProduct } from "../redux/Slices/CartSlice";

const ItemCart = ({ item }) => {

	const dispatch = useDispatch()

	// const handelSubmit = (item) => {
	// 	const newItemToCart = {


	// 	}
	// }
	const handelMinus = (item) => {
		dispatch(minusProduct(item))
	}
	const handelPlus = (item) => {
		dispatch(addProduct(item))
	}
	const handelRemoveProduct = (item) => {
		dispatch(removeProduct(item))
	}

	return (
		<div className="itemCart">

			<span
				onClick={() => handelRemoveProduct(item)}
				className="removeCart"
			>
				Delete item
			</span>
			<div className="itemCart-img">
				img
			</div>
			<div className="itemCart-info">
				<div className="itemCart-name">
					name: {item.name}
				</div>
				<div className="itemCart-price">
					price: {item.price}
				</div>
				<div className="itemCart-count">
					Count : {item.count}
					<span
						onClick={() => handelMinus(item)}
						className='itemCart-countBtn'
					>-</span>
					<span
						onClick={() => handelPlus(item)}
						className='itemCart-countBtn'
					>+</span>

				</div>
			</div>

		</div>
	)
}

export default ItemCart