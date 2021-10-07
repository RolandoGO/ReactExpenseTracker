import React from 'react'
import { Link } from 'react-router-dom'
import AuthService from "../../auth/service/AuthService"

import {Button} from "@material-ui/core"
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import "./navBarStyle.css"

export default function NavbarIndex({setIsLogIn}) {

    const {isLogIn, handleLogOut} = AuthService()
    let btnLogIn;

    
    if (!isLogIn()) btnLogIn = <Link to="/logIn">Log In</Link>
    else btnLogIn = <Button variant="contained" onClick={()=>handleLogOut(setIsLogIn)}>Log Out</Button>

    

    return (
        <div className="NavBarStyle">
            
            <Link to="/"><MonetizationOnRoundedIcon fontSize="large"></MonetizationOnRoundedIcon></Link>
            <Link to="/home">HOME</Link>

            {btnLogIn}
     
        </div>
    )
}
