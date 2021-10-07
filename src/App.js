import { useState } from "react";

import NavBarIndex from "./common/navBar/NavbarIndex"
import FooterIndex from "./common/footer/footerIndex"
import WelcomePage from "./screens/public/WelcomePage"
import Home from "./screens/protected/Home"
import LogInIndex from "./auth/logIn/LogInIndex";
import ProtectedRouteLogIn from "./auth/protectedRoutes/logInProtect/protectedRouteLogIn";

import { Route, Redirect, Switch } from "react-router-dom";
import ProtectedRoute from "./auth/protectedRoutes/HomeProtect/ProtectedRoute";

import "./index.css"



function App() {

  //variable for rerendering the app and every child (NavBar) search if the user is login or not and show the logn or the logout button
  const [isLogIn, setIsLogIn] = useState(false)

  
  
  return (
    <div className="App">
      
      <NavBarIndex setIsLogIn ={setIsLogIn}></NavBarIndex>
      <br></br>

      <main className="content">
        <Switch>

          <Route exact path="/" component={WelcomePage}/>
          <ProtectedRoute exact path="/home" component={Home}/> 
          <ProtectedRouteLogIn path="/logIn" render={()=><LogInIndex setIsLogIn ={setIsLogIn}/>}/>
          <Redirect to="/"/>
          
        </Switch>
      </main>
      
      <br></br>
      <FooterIndex></FooterIndex>
    </div>
  );
}

export default App;
