import Login from '../../components/Login'

export default function LoginPage() {

  const onSubmitSignUp = async data => {
    try {
      // Create request to api service
      const req = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // format the data
          body: JSON.stringify({
            email: data.email,
            username: data.username,
            password: data.password,
        }),
      });
      const res = await req.json();
      // Log success message
      console.log(res);                
      } catch(err) {
      console.error(`ERROR: ${err}`);
      }
  }
  
  const onClose = async data => {
      console.log("close Clicked", data)
    }

  const onSubmitLogin  = async data => {
    console.log("onSubmitSignUp  Clicked", data)
  }

  return <Login 
          onClose={onClose} 
          onSubmitLogin={onSubmitLogin}
          onSubmitSignUp ={onSubmitSignUp }
          />
}