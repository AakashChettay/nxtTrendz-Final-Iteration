import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <li key={eachCartItem.id} style={{listStyle: 'none'}}>
              <CartItem cartItemDetails={eachCartItem} />
            </li>
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
