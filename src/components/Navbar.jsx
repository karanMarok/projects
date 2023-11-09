import * as React from 'react';
import logo from '../images/logo.png'
import { Button, Menu, MenuItem } from '@mui/material';
import "../App.css"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleWeatherClick = () => {
        navigate("/weatherapi");
    }

    const handleMovieClick = () => {
        navigate("/moviesapi");
    }

    return (
        <>
            <div className="container-fluid">
                <div className='row' style={{ maxWidth: "100%" }}>
                    <div className="col-4 d-flex justify-content-center">
                        <Link to="/"><img className="navLogo" src={logo} alt="logo" /></Link>
                        <Link to="/" className="navTitle" style={{ textDecoration: "none", color: "black" }}>React Projects</Link>
                    </div>
                    <div className="col-5 d-flex justify-content-around" id="navs">
                        <Link to="/"><button className="navButton">REACT EVENTS</button></Link>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            variant="text"
                            sx={{
                                color: "black",
                                fontSize: "1rem",
                                ':hover': {
                                    backgroundColor: '#816843',
                                    color: "white"
                                }
                            }}
                        >
                            REACT API <i className="fa fa-caret-down"></i>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={(e) => {handleWeatherClick(e); handleClose(e)}}
                                sx={{
                                    ':hover': {
                                        color: "white",
                                        backgroundColor: '#816843',
                                    }
                                }}>Weather API</MenuItem>

                            <MenuItem onClick={(e) => {handleMovieClick(e); handleClose(e)}}
                                sx={{
                                    ':hover': {
                                        color: "white",
                                        backgroundColor: '#816843'
                                    }
                                }}>Movies API</MenuItem>
                        </Menu>

                        <Link to="/redux"><button className="navButton">REDUX DATA FLOW</button></Link>
                        <Link to="/hooks"><button className="navButton">ALL HOOKS</button></Link>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                    <button className="navSign">Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;