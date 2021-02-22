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