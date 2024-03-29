import React, { useEffect, useState } from "react";
import { getBook, updateCart } from "../utils/BookApi";
import bookImg from '../assets/book.jpg';
import '../styles/CartCard.scss';

const CartCard = ({ book }) => {

  // const {books}= props;
  console.log(book, "books");
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBook(`book/${book.bookId}`);
      setBookData(result);

    };
    fetchData();
  }, []);


  return (
    <>
      <div className="cartcard">
        <div className="cartcard-img">
          <img src={book.bookImage} alt="book" className="c-img" />
        </div>
        <div className="cartcard-detail">
          <div className="cartcard-a">
            <span style={{ fontSize: "20px" }}>{book.bookName}</span>
            <span style={{ fontSize: "12px" }}>{book.author}</span>
          </div>
          <div className="cartcard-b">
            <h1 className="cartcard-c">
              Rs.{bookData.discountPrice} <del className="del">Rs.{book.price}</del>
            </h1>
          </div>
          <div>
            <button>remove</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartCard;