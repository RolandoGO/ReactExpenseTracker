import React from 'react'
import { Route} from 'react-router-dom';
import  AuthService from "../../service/AuthService"


export default function ProtectedRoute(props) {

    const {component:Component, ...rest} = props

    const {isLogIn} = AuthService()
    
    let renderComponent;

    if(isLogIn()){
        renderComponent =(
            <Route render={()=><Component/>}/>
        )
    }
    else{
        renderComponent =(
            <Route render={ ()=><h2>You have to be Log In</h2>}/>
        )
    }

    return (
        <div>

            {renderComponent}
        </div>
    )
}
