import React, {useState, useEffect} from 'react'
import PostDetails from '../../components/PostDetails'
import { getPost } from '../../network'
import { useParams } from "react-router-dom"

export default function PostDetailsPage() {
  const [post, setPost] = useState()
  // The route was defined as <Route path="/posts/:postId">
  // So useParams will contain a property postId that contains the data we need
  let { postId } = useParams()

  useEffect(() => {
    (async () => {
        const result = await getPost({postId: postId})
        setPost(result.post)
    })()
  }, [])

  const submitComment = async data => {
    console.log("submit comment", data)
  }

  const likeClicked = async data => {
    console.log("Like Clicked", data)
  }

  return (
    <>
    { !post ? // If there's no post, let's just show a loading indicator
      <p>Loading</p>
    :
      <PostDetails 
      post={post} 
      likeClicked={likeClicked} 
      submitComment={submitComment}
      ></PostDetails>
    }
    </>
  )
}