import { useHistory } from "react-router"

export default function AuthService() {


   const history = useHistory()
   const storage = window.localStorage

   function isLogIn(){
      if(storage.getItem("isLogIn") && storage.getItem("currentUser")) return true 
      return false
   }



   const handleLogIn = (values, reset)=>{
      
   
      reset.setPassword("")
      reset.setEmail("")
      
      storage.setItem("isLogIn", "true")
      storage.setItem("currentUser", JSON.stringify(values))
      history.replace("/home")

      reset.setIsLogIn(flag=>!flag)


      
   
   }

   function handleLogOut(setIsLogIn){
      storage.clear()
      
      history.replace("/logIn")
      setIsLogIn(flag =>!flag)
     
   }





   return {
      isLogIn,
      handleLogIn,
      handleLogOut
   }
}
