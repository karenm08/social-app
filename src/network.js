import axios from 'axios'

export async function getPosts() {
  try {
    const result = await axios.get(`api/posts`)
    return result.data
  } catch (error) {
    console.log(error)
    alert(error.message)
    // We need a better plan for handling errors
    // So that the user knows what's gone wrong
    // We can handle this later though
  }
}

export async function getPost({postId}) {
  try {
    const result = await axios.get(`/api/posts/${postId}`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function getPostComments({postId}) {
  try {
    const result = await axios.get(`/api/posts/${postId}/comments`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const onSubmitSignUp = async data => {
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

export const onSubmitLogin = async data => {
  try {
    // Create request to api service
    const req = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // format the data
        body: JSON.stringify({
          username: data.username,
          password: data.password,
      })
    });
    const res = await req.json();
    // Log success message - authenticated: true
    res.authenticated ? window.alert("successfully login!") : window.alert("invaild login")
    console.log(res.authenticated);                
    } catch(err) {
    console.error(`ERROR: ${err}`);
    }
}


// export async function login({username, password})
// export async function signUp({email, password, username}){}
// export async function savePost({type, imageUrl, description})