import React, { useEffect, useState } from "react";
import { getCart } from "../utils/BookApi";
import CartCard from "./CartCard";
import '../styles/Cart.scss'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


const Cart = () => {

    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const status = localStorage.getItem("Token") ? true : false;

    useEffect(() => {

        const fetchData = async () => {
            if (status) {
                const res = await getCart("/card")
                console.log(res, "111111111");
                setCart(res);
            }
        };
        fetchData();
    }, [cart]);


    return (
        <>
            <div className="main-cart">
                <div className="cart-div">
                    <div className="cart-a">
                        <span>My Cart ({cart.length})</span>
                        <div className="cart-disp">
                            <CartCard />
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