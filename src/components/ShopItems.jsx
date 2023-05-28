import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import ItemShop from "./ItemShop";


const ShopItem = () => {

	const items = useSelector((state) => state.ItemsShopsSlice.shopsItems)

	const selectedShop = useSelector((state) => state.SelectedShopSlice.selectedShop)

	return (
		<div className="shopItems">
			<div className='shopItems-title'>
				Shop Item:
			</div>
			<div className="itemsBlock">
				{selectedShop
					?
					items.filter(item => item.type === selectedShop).map(filteredItem => (
						<li>
							<ItemShop key={filteredItem.id} item={filteredItem} />
						</li>
					))
					:
					items && items.map((item) => (
						<ItemShop key={item.id} item={item} />
					))
				}
			</div>
		</div>
	)
}


export default ShopItem
