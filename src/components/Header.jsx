import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	const [activeLink, setActiveLink] = React.useState('Shops')


	const shopCart = 'Shops'
	const shoppingCarts = 'Shopping Cart'

	const handelLink = (link) => {
		setActiveLink(link)
	}
	return (
		<header >
			<Link
				onClick={() => handelLink(shopCart)}
				className={`${activeLink === shopCart ? 'active' : ''}`}
				to={`/`}
			>
				{shopCart}
			</Link>
			<div className={`verticalLine`}></div>
			<Link
				onClick={() => handelLink(shoppingCarts)}
				className={`${activeLink === shoppingCarts ? 'active' : ''}`}
				to={`/ShoppingCart`}
			>
				{shoppingCarts}
			</Link>
		</header>
	)
}

export default Header