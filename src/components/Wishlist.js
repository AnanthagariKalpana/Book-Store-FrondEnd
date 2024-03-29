import React, { useEffect, useState } from "react";
import WishCard from "./WishCard";
import { getWishList } from "../utils/BookApi";
import '../styles/Wishlist.scss';



const Wishlist = () => {

    const [wishData, setWishData] = useState([]);
    const [isWish, setIsWish] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            const res = await getWishList("/wishlist");
            console.log(res, "wishhh");
            if (res.data.data?.bookItems) {
                console.log(res.data.data.bookItems, "111111111");

                setWishData(res.data.data.bookItems);

                if (res.data.data.bookItems.length > 0) {
                    setIsWish(true);
                }
            }
        }
        fetchData();

    }, [])

    return (
        <div className="wish-div">
            <div className="wish">
                <div className="wish-a">
                    <span>My Wishlist {wishData.length}</span>
                </div>
                <div className="wish-card">
                    {isWish ? (
                       wishData.map((book)=> (<WishCard key={book._id} book={book}/>))
                    ):(
                        <span>No Items in WishList</span>
                    )}
                </div>
            </div>
            
        </div>
    )
}
export default Wishlist;