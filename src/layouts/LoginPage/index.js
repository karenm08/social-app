import Login from '../../components/Login'
import { onSubmitSignUp } from '../../network'
import { onSubmitLogin } from '../../network'
import { useHistory } from "react-router-dom"

export default function LoginPage({setToken}) {
  const history = useHistory()

  async function login(details) {
    let result 
    console.log(details);
    if (details.type === "login") {
      result = await onSubmitLogin(details)
    }
    if (details.type === "signUp") {
      result = await onSubmitSignUp(details)
    }
    console.log(result);
    // Store the JWT into local storage
    setToken(result.accessToken)
    history.push("/")
  }

  
  const onClose = async data => {
      console.log("close Clicked", data)
    }

  return <Login 
          onClose={onClose} 
          onSubmitLogin={onSubmitLogin,login}
          onSubmitSignUp ={onSubmitSignUp}
          />
}