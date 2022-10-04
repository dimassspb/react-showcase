const CartItem = (props) => {
  const {id, name, price, quantity, removeFromCart, orderItemCounterPlus, orderItemCounterMinus} = props;
  return (
      <li className='collection-item'>
          {name} {price} X{" "}
          <i
              className='material-icons cart-quantity'
              onClick={() => orderItemCounterMinus(id)}
          >
              remove
          </i>
          {quantity}{" "}
          <i
              className='material-icons cart-quantity'
              onClick={() => orderItemCounterPlus(id)}
          >
              add
          </i>{" "}
          = {Number(price) * Number(quantity)}$
          <span className='secondary-content'>
              <i
                  className='material-icons item-delete'
                  onClick={() => removeFromCart(id)}
              >
                  clear
              </i>
          </span>
      </li>
  );
}
 
export default CartItem;

<i class='material-icons'>add</i>;