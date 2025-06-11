import './index.css'

const CartSummary = props => {
  const {cartList} = props
  const itemCount = cartList.length
  const totalCartSum = cartList.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  )

  return (
    <div className="cartSummaryContainer">
      <h1 className="totalHeading">
        Order Total: <span className="totalAmount">Rs {totalCartSum}/-</span>
      </h1>
      <p className="itemCountPara">{itemCount} items in cart</p>
      <button type="button" className="checkoutBtn">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
