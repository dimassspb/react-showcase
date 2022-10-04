import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import CartIcon from "./CartIcon";
import CartList from "./CartList";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";
import Alert from "./Alert";

const Showcase = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setIsCartShow] = useState(false);
    const [alertName, setAlertName] = useState("");

    function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                console.log(data.featured);
                setLoading(false);
            });
    }

    const addToCart = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id,
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const removeFromCart = (id) => {
        const newOrder = order.filter((item) => item.id !== id);
        setOrder(newOrder);
    };

    const handleCartShow = () => {
        setIsCartShow(!isCartShow);
        console.log(isCartShow);
    };

    const orderItemCounterPlus = (id) => {
        const newOrder = order.map((item) => {
            if (item.id === id) {
                const newQuantity = item.quantity + 1;

                return {
                    ...item,
                    quantity: newQuantity,
                };
            }
            return item;
        });
        setOrder(newOrder);
    };
    const orderItemCounterMinus = (id) => {
        const newOrder = order.map((item) => {
            if (item.id === id && item.quantity > 0) {
                const newQuantity = item.quantity - 1;

                return {
                    ...item,
                    quantity: newQuantity,
                };
            } else {
                return item;
            }
        });
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName("");
    };

    useEffect(getGoods, []);
    console.log("order", order);
    return (
        <main className='container content'>
            <CartIcon quantity={order.length} handleCartShow={handleCartShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToCart={addToCart} />
            )}
            {isCartShow && (
                <CartList
                    order={order}
                    handleCartShow={handleCartShow}
                    removeFromCart={removeFromCart}
                    orderItemCounterPlus={orderItemCounterPlus}
                    orderItemCounterMinus={orderItemCounterMinus}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
};

export { Showcase };
