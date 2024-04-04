import React, { useEffect, useState } from "react";
import { getBook, removeCart, updateCart } from "../utils/BookApi";
import '../styles/CartCard.scss';
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartCard = ({ book }) => {

  // const {books}= props;
  console.log(book, "books");
  const [bookData, setBookData] = useState([]);
  const[Quantity, setQuantity]=useState(book.quantity);
  const[isData, setIsData]= useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBook(`book/${book.bookId}`);
      setBookData(result);

    };
    fetchData();
  }, []);

  const handleRemove=async ()=>{
  
    console.log(book.bookId,"00000");
    await removeCart(`cart/${book.bookId}`);
  }

  const increaseQuantity=()=>{
    if(bookData.quantity> Quantity)
    {
      setQuantity( Quantity +1);
      handle();
    }
  }

  const decreaseQuantity=()=>{
    if(Quantity > 1)
    {
      setQuantity(Quantity - 1);
    }
    else{
      setIsData(false)
    }
    handleRemove();
  }

  const handle= async()=>{
    await updateCart(`cart/${book.bookId}`)
  }

  const handleDelete = async()=>{
    let quantity=Quantity
    for(let i=1;i<=quantity;i++){
      await handleRemove();
    }
    setIsData(false)
  };


  return (
    <>
      {isData ? (
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
          <div className="as-button">
                  <IconButton onClick={decreaseQuantity}>
                    <RemoveIcon className="minus" />
                  </IconButton>
                  <span className="q-t">{Quantity}</span>
                  <IconButton onClick={increaseQuantity}>
                    <AddIcon className="plus" />
                  </IconButton>
                </div>
          <div>
            <button onClick={handleDelete}>remove</button>
          </div>
        </div>
      </div>
      ):(
        <div></div>
      )}
    </>
  )
}

export default CartCard;