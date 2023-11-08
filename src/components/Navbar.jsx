import * as React from 'react';
import logo from '../images/logo.png'
import { Button, Menu, MenuItem } from '@mui/material';
import "../App.css"

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="container-fluid">
                <div className='row' style={{ maxWidth: "100%" }}>
                    <div className="col-4 d-flex justify-content-center">
                        <img className="navLogo" src={logo} alt="logo" />
                        <p className="navTitle">React Projects</p>
                    </div>
                    <div className="col-5 d-flex justify-content-around" id="navs">
                        <button className="navButton">REACT EVENTS</button>
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
                            <MenuItem onClick={handleClose} 
                            sx={{
                                ':hover': {
                                    color: "white",
                                    backgroundColor: '#816843'
                                }
                            }}>Weather API</MenuItem>
                            <MenuItem onClick={handleClose}
                            sx={{
                                ':hover': {
                                    color: "white",
                                    backgroundColor: '#816843'
                                }
                            }}>Second API</MenuItem>
                        </Menu>

                        <button className="navButton">REDUX DATA FLOW</button>
                        <button className="navButton">ALL HOOKS</button>
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