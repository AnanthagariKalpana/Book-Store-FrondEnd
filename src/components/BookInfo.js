import React, { useEffect, useState } from "react";
import { getBook } from "../utils/BookApi";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


import '../styles/BookInfo.scss';


const BookInfo = () => {

    const books = useParams()
    console.log(books);
    const [book, setBook] = useState([]);
    const [Quantity, setQuantity] = useState(1);
    const [isAdd, setIsAdd] = useState(false);
    const [isWish, setIsWish] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            console.log(books);
            const res = await getBook(`book/${books._id}`);
            console.log(res);
            setBook(res)
        }
        fetchData();
    }, [])

    return (
        <div>
            <div className="book-info">
                <div className="left-div">
                    <div className="b-div">
                        <img src={book.bookImage} alt="book" className="b-photo" />
                    </div>
                    <div className="b-n">
                        <button className="cart-b">Add to Cart</button>
                        <button className="wish-b"> <FavoriteIcon sx={{fontSize:"15px", display:"flex", width:"15px"}}></FavoriteIcon>Wishlist</button>
,
                    </div>
                    {/* <div className="a-div">
                        {quantity > 0 ? (
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
                                    <div style={{ width: "100%" }}>
                                        {status ? (
                                            <button className="cart-b" onClick={() => handleCart()}>
                                                ADD TO CART
                                            </button>
                                        ) : (
                                            <button
                                                className="cart-b"
                                                onClick={() => handleClickOpen()}
                                            >
                                                ADD TO CART
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="add-cart-div">
                                <button className="cart-b" onClick={() => navigate("/home")}>
                                    Notify Me
                                </button>
                            </div>
                        )}
                        {status ? (
                            <button
                            //   className={`wish-b ${isWish ? "active" : ""}`}
                            //   onClick={() => handleWish(!isWish)}
                            >
                                <FavoriteIcon
                                // sx={
                                //   isWish
                                //     ? { color: "#EE4B2B", fontSize: "medium" }
                                //     : { color: "#FFFFFF", fontSize: "medium" }
                                // }
                                ></FavoriteIcon>
                                WISHLIST
                            </button>
                        ) : (
                            <button
                            //   className={`wish-b ${isWish ? "active" : ""}`}
                            //   onClick={() => handleClickOpen()}
                            >
                                <FavoriteIcon
                                // sx={
                                //   isWish
                                //     ? { color: "#EE4B2B", fontSize: "medium" }
                                //     : { color: "#FFFFFF", fontSize: "medium" }
                                // }
                                ></FavoriteIcon>
                                WISHLIST
                            </button>
                        )}
                    </div> */}
                </div>

                <div className="right-div">
                    <div>
                        <div className="book-name">
                            <span>{book.bookName}</span>
                            <span>{book.author}</span>
                        </div>
                        <div className="b-rating">
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
                    <div>
                        <div>
                            <span>Book Detail</span>

                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
                        </div>
                    </div>
                    <div>
                        <span>feedback</span>
                        <div><h2>Customer Feedback</h2></div>
                        <div>
                        <Rating name="no-value" value={null} />
                        </div>

                    </div>
                    <div><span>review</span>
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