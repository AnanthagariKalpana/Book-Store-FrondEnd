import React, { useEffect, useState } from "react";
import { getBook } from "../utils/BookApi";
import { useNavigate, useParams } from "react-router-dom";

import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Rating from '@mui/material/Rating';



import '../styles/BookInfo.scss';


const BookInfo = () => {

    const books = useParams()
    console.log(books);
    const [book, setBook] = useState([]);
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
                </div>

                <div className="right-div">
                    <div className="right-div-1">
                        <div className="book-name">
                            <span style={{fontSize:"25px"}}>{book.bookName}</span>
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