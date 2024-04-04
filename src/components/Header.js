import React, { useState } from 'react';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import SearchIcon from "@mui/icons-material/Search";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import '../styles/Header.scss'
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { Popper } from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';

const Header = () => {

    const [user, setUser] = useState(false);
    const [opend, setOpend] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedValue, setSelectedValue] = useState();
    const navigate = useNavigate();

    const handleClick = (event) => {
        console.log("clickkkkkkkkk");
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleNavigate = (url) => {
        navigate(url);
    };
    const handleClickOpen = () => {
        setOpend(true);
    };
    const handleLogout = () => {
        localStorage.clear();
        handleClick();
        navigate("/");
      };

      const handleClose=(value)=>{
        setOpend(false);
        setSelectedValue(value)
      }
    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <div>
            <div className="head">
                <div className="name" onClick={() => navigate("")}>
                    <div className="logo-div">
                        {/* <img
                            src={logo}
                            className="logo"
                            alt="book"
                            onClick={() => handleNavigate("/home")}
                        /> */}
                        <ImportContactsTwoToneIcon />
                    </div>
                    <div className="name-div">
                        <h4
                            className="project-name"
                        //onClick={() => handleNavigate("/home")}
                        >
                            Bookstore
                        </h4>
                    </div>
                </div>
                <div className="search-div">
                    <ListItemIcon>
                        <SearchIcon sx={{ color: "#9D9D9D" }}></SearchIcon>
                    </ListItemIcon>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        onChange={(e) => {
                            // dispatch(filterBookData(e.target.value));
                        }}
                    />
                </div>

                <div className="right-icons">
                    <div className="profile" onClick={handleClick}>
                        <div>
                            <PersonOutlineOutlinedIcon
                                sx={{ color: "#FFFFFF" }}
                            ></PersonOutlineOutlinedIcon>
                        </div>

                        <span style={{ color: "#FFFFFF", fontSize: "12px" }}>Profile</span>
                    </div>
                    <div className="cart" >
                        <div>
                            <ShoppingCartOutlinedIcon
                                sx={{ color: "#FFFFFF" }}
                                onClick={() => navigate("/cart")}
                            ></ShoppingCartOutlinedIcon>
                        </div>
                        <span style={{ color: "#FFFFFF", fontSize: "12px" }}>Cart</span>
                    </div>
                </div>
            </div>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div className='prof-list'>
                    <div>
                        <span>welcome</span>
                    </div>
                    <div>
                        <div className="no-2-1" onClick={() => {
                            handleNavigate("/profile");
                            handleClick();
                        }}>
                            <PersonOutlineOutlinedIcon
                                sx={{ color: "#878787", fontSize: "15px" }}
                            ></PersonOutlineOutlinedIcon>
                            <span className="txt-1">Profile</span>
                        </div>
                    </div>
                    <div>
                        <div className="no-2-1" onClick={() => {
                            handleNavigate("/cart");
                            handleClick();
                        }}>
                            <ShoppingBagOutlined
                                sx={{ color: "#878787", fontSize: "15px" }}>
                            </ShoppingBagOutlined>
                            <span className="txt-1"> My Orders</span>
                        </div>
                    </div>
                    <div>
                        <div className="no-2-1" onClick={() => {
                            handleNavigate("/wishlist");
                            handleClick();
                        }}>
                            <FavoriteIcon
                                sx={{ color: "#878787", fontSize: "15px" }}>
                            </FavoriteIcon>
                            <span className="txt-1"> My Wishlist</span>
                        </div>
                    </div>
                </div>
            </Popper>
            {/* <Login 
            selectedValue={selectedValue}
            open={opend}
            onClose={handleClose}
            /> */}
        </div>
    )
}

export default Header;