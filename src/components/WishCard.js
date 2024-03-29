import React, { useEffect, useState } from "react";
import { getBook } from "../utils/BookApi";
import '../styles/WishCard.scss';

const WishCard = ({ book }) => {
    console.log(book, '///////');
    const [bookData, setBookData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getBook(`book/${book.bookId}`);
            setBookData(result);
        }
        fetchData();
    }, [])

    return (
        <div>
            <div className="wishcard-div">
                <div className="wish-img">
                    <img src={book.bookImage} alt="book" className="w-img" />
                </div>
                <div className="wishcard">
                <div className="wish-details">
                    <span style={{ fontSize: "20px" }}>{book.bookName}</span>
                    <span style={{ fontSize: "12px" }}>{bookData.author}</span>
                </div>
                <div className="wishcard-a">
                    <h1 className="wishcard-b">
                        Rs.{bookData.discountPrice} <del className="del">Rs.{book.price}</del>
                    </h1>
                </div>
                </div>
            </div>

        </div>
    );

}
export default WishCard;