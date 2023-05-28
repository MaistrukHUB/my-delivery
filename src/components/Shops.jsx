import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedShops } from '../redux/Slices/SelectedShopSlice';




const Shops = () => {
	const dispatch = useDispatch()

	const shops = useSelector((state) => state.ShopsSlice.shops)
	const selectedShop = useSelector((state) => state.SelectedShopSlice.selectedShop)





	const handelShop = (type) => {
		dispatch(setSelectedShops(type))
	}
	return (
		<div className='shopsBlock'>
			<p>Shops :</p>
			<ul>
				<li
					className={selectedShop === "" ? 'active' : ''}
					onClick={() => handelShop("")}
				>
					Всі
				</li>
				{shops && shops.map((shop) => (
					<li
						className={selectedShop === shop.type ? 'active' : ''}
						onClick={() => handelShop(shop.type)}
						key={shop.type}
					>
						{shop.name}
					</li>

				))}

			</ul>

		</div>
	)
}

export default Shops