const CartIcon = (props) => {
    const { quantity = 0, handleCartShow } = props;

    return (
        <div
            className='cart-icon teal lighten-2 white-text'
            onClick={handleCartShow}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
                <span className='quantity'>{quantity}</span>
            ) : null}
        </div>
    );
};

export default CartIcon;
