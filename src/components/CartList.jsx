import CartItem from "./CartItem";

const CartList = (props) => {
    const {
        order = [],
        handleCartShow,
        removeFromCart,
        orderItemCounterPlus,
        orderItemCounterMinus,
    } = props;

    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    return (
        <ul className='collection cart-list'>
            <li className='collection-item active'>Cart</li>
            <i className='material-icons cart-close' onClick={handleCartShow}>
                clear
            </i>
            {order.length ? (
                order.map((item) => (
                    <CartItem
                        key={item.id}
                        {...item}
                        removeFromCart={removeFromCart}
                        orderItemCounterPlus={orderItemCounterPlus}
                        orderItemCounterMinus={orderItemCounterMinus}
                    />
                ))
            ) : (
                <li className='collection-item'>Cart is empty</li>
            )}
            <li className='collection-item active'>Total: {totalPrice}$</li>
            <li className='collection-item'>
                <button className='btn btn-small'>Proceed to checkout</button>
            </li>
        </ul>
    );
};

export default CartList;
