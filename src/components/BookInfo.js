import React, { useEffect, useState } from "react";
import { getBook, getCart, getWishList, removeCart, updateCart, updateWishlist } from "../utils/BookApi";
import { useNavigate, useParams } from "react-router-dom";

import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Rating from '@mui/material/Rating';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


import '../styles/BookInfo.scss';
import { IconButton } from "@mui/material";


const BookInfo = () => {

    const books = useParams()
    console.log(books);
    const [book, setBook] = useState([]);
    const [Quantity, setQuantity] = useState(1);
    const [isAdd, setIsAdd] = useState(false);
    const [opend, setOpend] = useState(false);
    const[isWish, setIsWish]=useState(false);

    const navigate = useNavigate();

    const status = localStorage.getItem("Token") ? true : false;

    useEffect(() => {

        const fetchData = async () => {
            console.log(books);
            const res = await getBook(`book/${books._id}`);
            console.log(res);
            setBook(res)
            if (status) {
                const result = await getCart("/cart");
                console.log(result, "000000000");
                let cartData = result.data?.items;
                const data = cartData?.filter(
                    (ele) => ele.bookId === res.data?.data._id
                );
                if (data) {
                    if (data[0]) {
                        setIsAdd(true);
                        setQuantity(data[0].quantity);
                    }
                }
            }
            if(status)
            {
                const wList=await getWishList("/wishlist");
                let wishData = wList.data?.items;
                const wish = wishData?.filter(
                    (ele) => ele.bookId === res.data?.data._id
                );
                if(wish){
                    if(wish[0])
                    {
                        setIsWish(true)
                    }
                }

            }
        }
        fetchData();
    }, []);

    const handleClick=()=>{
        setOpend(true);
    }

    const increaseQuantity = () => {
        if (book.quantity > Quantity) {
            setQuantity(Quantity + 1);
            handleCart();
        }
    };

    const decreaseQuantity = () => {
        if (Quantity > 1) {
            setQuantity(Quantity - 1);
        } else setIsAdd(false);
        handleRemove();
    };

    const handleRemove = async () => {
        await removeCart(`/cart/${books._id}`);
    };

    const handleCart = async () => {
        if (status) {
            console.log(status);
            await updateCart(`/cart/${books._id}`);
            if (!isAdd) {
            setIsAdd(true);
            }
        }
    }

    const handleWish= async()=>{
        await updateWishlist(`/wishlist/${books._id}`);
    }

    return (
        <div>
            <div className="book-info">
                <div className="left-div">
                    <div className="b-div">
                        <img src={book.bookImage} alt="book" className="b-photo" />
                    </div>
                    <div className="left-div-a">
                        <div className="add-cart-div">
                            {isAdd ? (
                                <div className="as-button">
                                    <IconButton onClick={decreaseQuantity}>
                                        <RemoveIcon className="minus" />
                                    </IconButton>
                                    <span className="q-t">{Quantity}</span>
                                    <IconButton onClick={increaseQuantity}>
                                        <AddIcon className="plus" />
                                    </IconButton>
                                </div>
                            ) : (
                                <div className="b-n">
                                    {status ? (
                                        <button className="cart-b" onClick={() => handleCart()}>
                                            Add to Cart
                                        </button>
                                    ) : (
                                        <button className="cart-b" onClick={() => handleClick()}>
                                            Add to Cart
                                        </button>
                                    )}
                                    <button className="wish-b" onClick={()=> handleWish()}>
                                        <FavoriteIcon
                                            sx={{ fontSize: "15px", display: "flex", width: "15px" }}
                                        >
                                        </FavoriteIcon>Wishlist</button>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                <div className="right-div">
                    <div className="right-div-1">
                        <div className="book-name">
                            <span style={{ fontSize: "25px" }}>{book.bookName}</span>
                            <span>{book.author}</span>
                        </div>
                        <div className="div-rating">
                            <span className="rating">
                                4.5
                                <StarOutlinedIcon
                                    sx={{ color: "#FFFFFF", fontSize: "medium" }}
                                ></StarOutlinedIcon>
                            </span>
                            <span style={{ color: "#878787", fontSize: "11px" }}>({book.quantity})</span>
                        </div>
                        <div className="price-div">
                            <h1 className="price">
                                Rs.{book.discountPrice} <del className="del">Rs.{book.price}</del>
                            </h1>
                        </div>

                    </div>
                    <div className="b-details">
                        <div className="book-d">
                            <span>Book Detail</span>

                        </div>
                        <div>
                            <span className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
                        </div>
                    </div>
                    <div>
                        <div><h2>Customer Feedback</h2></div>
                        <div className="no-rating">
                            <span>overall rating</span>
                            <Rating name="no-value" value={null} />
                        </div>

                    </div>
                    <div className="review-div">
                        <span>review</span>
                        <div>
                            <Rating name="read-only" value={3} readOnly />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );

}

export default BookInfo;