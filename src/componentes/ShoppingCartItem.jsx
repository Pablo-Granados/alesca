import React from 'react';
import "@styles/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			{/* <figure>
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
			</figure> */}

			<FontAwesomeIcon icon={faUser} />

		</div>
	);
}

export default ShoppingCartItem;
