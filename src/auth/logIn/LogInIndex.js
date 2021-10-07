import React, { useState } from 'react'

import {Button, FormControl, Input, InputLabel } from '@material-ui/core';
import AuthService from "../service/AuthService"

import "./logInStyle.css"


export default function LogInIndex({setIsLogIn}) {

    const {handleLogIn} = AuthService()

    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [errorEmail, setEmailError]= useState(null)
    const [errorPassword, setPasswordError]= useState(null)


   
    
    const handleValidation = (e)=>{

        const inputType = e.currentTarget.id
        const value = e.currentTarget.value

        const passwordRegex = /^[\w]{5,10}$/
        const emailRegex = /^[\w]+@([a-zA-Z]+\.)[\w]+$/

        const passwordErrorMsj = "entre 5 y 10 caracteres alfanumericos"
        const emailErrorMsj = "email debe contener solo caracteres alfanumericos, Ej: xxxxxxx@xxx.xx"


        if(inputType === "password") {

            setPassword(value);
            if(!passwordRegex.test(value)){
                setPasswordError(passwordErrorMsj)
            }
            else setPasswordError(null)
            
        }
        
        else {
            setEmail(value);

            if(!emailRegex.test(value)){setEmailError(emailErrorMsj)} 
            else setEmailError(null)
           
        }
    }

    const btnFlag = (!errorEmail && !errorPassword && email.length>0 && password.length>0)? false:true
    

    
    return (
        <div>
            <form className="logInForm">
                <FormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email" type="email" value={email} onChange={(e)=>handleValidation(e)} aria-describedby="my-helper-text"  />
                    {errorEmail&& <p className="errorMsj">{errorEmail}</p>}
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="email">password</InputLabel>
                    <Input id="password" type="password" value={password} onChange={(e)=>handleValidation(e)}  aria-describedby="my-helper-text" />
                    {errorPassword&& <p className="errorMsj">{errorPassword}</p>}
                </FormControl>
                <Button disabled={btnFlag} variant="outlined" onClick={()=>handleLogIn({email,password}, {setPassword,setEmail,setIsLogIn})}>Log In</Button>
            </form>

           

        </div>
    )
}






