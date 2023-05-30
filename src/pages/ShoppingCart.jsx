import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import ItemCart from "../components/ItemCart";
import { addProduct, clearCart } from "../redux/Slices/CartSlice";
import axios from "axios";



const ShoppingCart = () => {
	const cart = useSelector((state) => state.CartSlice.cart)
	const totalPrice = useSelector((state) => state.CartSlice.totalPrice)

	const [inputs, setInputs] = React.useState({ name: '', email: '', phone: 0, address: '' });

	const dispatch = useDispatch()

	const handelClearCart = () => {
		dispatch(clearCart())
	}
	const HandelSubmit = (cart, totalPrice, inputs) => {
		const newCart = {
			totalPrice,
			cart,
			inputs
		}
		axios.post('https://my-delivery-backand.onrender.com/pushCart', newCart)
	}

	return (
		<div className='cartPage'>
			<div className="createCart">
				<div className="formsBlock">
					<div className="form">
						Name:
						<input
							onChange={e => setInputs({ ...inputs, name: e.target.value })}
							type="text"
							placeholder='name'
						/>
					</div>
					<div className="form">
						Email:
						<input
							onChange={e => setInputs({ ...inputs, email: e.target.value })}
							type="email"
							placeholder='name'
						/>
					</div>
					<div className="form">
						Phone:
						<input
							onChange={e => setInputs({ ...inputs, phone: e.target.value })}
							type="phone"
							placeholder='name'
						/>
					</div>
					<div className="form">
						Address:
						<input
							onChange={e => setInputs({ ...inputs, address: e.target.value })}
							type="text"
							placeholder='name' />
					</div>
				</div>
				<div className="cartBlock">
					<span
						onClick={() => handelClearCart()}
						className="removeCart removeProduct"
					>
						Clear cart
					</span>
					<div className='cartItems'>
						{
							cart && cart.map((item) => (
								<ItemCart key={item.id} item={item} />
							))
						}

					</div>
				</div>
			</div>
			<div className='submitBlock'>
				<div className="totalPrice">Total price : {totalPrice}</div>
				<div
					onClick={() => HandelSubmit(cart, totalPrice, inputs)}
					className="SubmitBtn"
				>Submit</div>
			</div>
		</div>
	)
}

export default ShoppingCart
