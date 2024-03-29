import React, { useEffect, useState } from "react";
import { getCart } from "../utils/BookApi";
import CartCard from "./CartCard";
import '../styles/Cart.scss'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const navigate = useNavigate();
    const [isCart, setIsCart] = useState(false);


    const status = localStorage.getItem("Token") ? true : false;

    useEffect(() => {

        const fetchData = async () => {
            if (status) {
                const res = await getCart("/cart")
                if (res.data.data?.bookItems) {
                    console.log(res.data.data.bookItems, "111111111");

                    setCartData([...res.data.data.bookItems]);
                    if (res.data.data.bookItems.length > 0) {
                        setIsCart(true);
                    }
                }
            }
        };
        fetchData();
    }, []);
    console.log(cartData,"cartData");
    
    return (
        <>
            <div className="main-cart">
                <div className="cart-div">
                    <div className="cart-a">
                        <span>My Cart ({cartData.length})</span>
                        <div className="cart-disp">
                            {isCart ? (
                                cartData.map((book) => (<CartCard key={book._id} book={book} />)
                                )) : (
                                <div>
                                    <span>No Items in Cart</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="cart-p">
                        <div className="cart-add">
                            <span>Address</span>
                        </div>
                        <div>
                            <button className="cart-o">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="address">
                    <span>Address Details</span>
                </div>
                <div className="order">
                    <span>Order Summary</span>
                </div>
            </div>
        </>
    )
}

export default Cart;