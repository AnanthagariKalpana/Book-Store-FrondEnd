import React, { useState } from 'react';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import SearchIcon from "@mui/icons-material/Search";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import '../styles/Header.scss'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

    return (
        <div>
            <div className="head">
                <div className="name" onClick={()=> navigate("")}>
                    <div className="logo-div">
                        {/* <img
                            src={logo}
                            className="logo"
                            alt="book"
                            onClick={() => handleNavigate("/home")}
                        /> */}
                        <ImportContactsTwoToneIcon/>
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
                                onClick={()=> navigate("/cart")}
                            ></ShoppingCartOutlinedIcon>
                        </div>
                        <span style={{ color: "#FFFFFF", fontSize: "12px" }}>Cart</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;