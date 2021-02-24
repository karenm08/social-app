import Login from '../../components/Login'
import { onSubmitSignUp } from '../../network'
import { onSubmitLogin } from '../../network'

export default function LoginPage() {

  //---------------------------Sign Up----------------------------------------------------//
  // const onSubmitSignUp = async data => {
  //   try {
  //     // Create request to api service
  //     const req = await fetch('/api/users', {
  //         method: 'POST',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //         // format the data
  //         body: JSON.stringify({
  //           email: data.email,
  //           username: data.username,
  //           password: data.password,
  //       }),
  //     });
  //     const res = await req.json();
  //     // Log success message
  //     console.log(res);                
  //     } catch(err) {
  //     console.error(`ERROR: ${err}`);
  //     }
  // }

  //---------------------------Login----------------------------------------------------//
  // const onSubmitLogin = async data => {
  //   try {
  //     // Create request to api service
  //     const req = await fetch('/api/users/login', {
  //         method: 'POST',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //         // format the data
  //         body: JSON.stringify({
  //           username: data.username,
  //           password: data.password,
  //       })
  //     });
  //     const res = await req.json();
  //     // Log success message - authenticated: true
  //     res.authenticated ? window.alert("successfully login!") : window.alert("invaild login")
  //     console.log(res.authenticated);                
  //     } catch(err) {
  //     console.error(`ERROR: ${err}`);
  //     }
  // }
  
  const onClose = async data => {
      console.log("close Clicked", data)
    }

  return <Login 
          onClose={onClose} 
          onSubmitLogin={onSubmitLogin}
          onSubmitSignUp ={onSubmitSignUp}
          />
}