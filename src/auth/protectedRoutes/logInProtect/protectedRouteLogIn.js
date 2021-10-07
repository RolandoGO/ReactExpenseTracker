import React from 'react'
import AuthService from '../../service/AuthService'
import { Route} from 'react-router-dom';
import Home from '../../../screens/protected/Home';
import { useHistory } from 'react-router';

export default function ProtectedRouteLogIn(props) {

    const history = useHistory()
    const {isLogIn} = AuthService()
    const {render:Component, ...rest} = props 

    //condition for not let in go back to the LogIn page if it is already log in.. it goes to the home
    if(isLogIn()){

        history.replace("/home")
        return <Route component={Home} />
    } 
 // condition for redirect to the logIn form if it is not login
    else return <Route component={Component}/>

    
}
