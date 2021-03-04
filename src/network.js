import axios from 'axios'

//--------------------------get all Posts--------------------------------------------//
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

//--------------------------get one Post by id--------------------------------------------//
export async function getPost({postId}) {
  try {
    const result = await axios.get(`/api/posts/${postId}`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

//--------------------------get post commments--------------------------------------------//
export async function getPostComments({postId}) {
  try {
    const result = await axios.get(`/api/posts/${postId}/comments`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

//--------------------------save Submit SignUp--------------------------------------------//
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
    res.accessToken ? window.alert("Successfully sign up!") : window.alert("Failed to sign up") 
    console.log(res);  
    return res         
    } catch(err) {
    console.error(`ERROR: ${err}`);
    }
}

//--------------------------save Submit Login--------------------------------------------//
export const onSubmitLogin = async data => {
  try {
    // Create request to api service
    const res = await fetch('/api/users/login', {
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
    const result = await res.json();
    // Log success message - authenticated: true
    result.accessToken ? window.alert("successfully login!") : window.alert("invaild login")
    return result              
  } catch(err) {
    console.error(`ERROR: ${err.message}`);
  }
}

//--------------------------save Submit Comment--------------------------------------------//
export const submitComment = async (data) => {
  try {
    // Create request to api service
    const req = await fetch(`/api/posts/${data.postId}/comments`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        // format the data
        body: JSON.stringify({
          text: data.text
      }),
    });
    const res = await req.json();
    // Log success message
    console.log(res);                
    } catch(err) {
    console.error(`ERROR: ${err}`);
    }
}

//-------------------------- Submit Post--------------------------------------------//
// Get the token from local storage
const token = localStorage.getItem('token')

export const onSubmitPost = async data => {
  try {
    // Create request to api service
    const req = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // format the data
        body: JSON.stringify({
          description: data.description,
          imageUrl: data.imageUrl,
          type: "jpg",
      }),
    });
    const res = await req.json();
    // Log success message
    console.log(res);                
    } catch(err) {
    console.error(`ERROR: ${err}`);
    }
}