import React, {useState, useEffect} from 'react'
import PostDetails from '../../components/PostDetails'
import { getPost } from '../../network2'

export default function PostDetailsPage() {
  const [post, setPost] = useState()

  useEffect(() => {
    (async () => {
        // Hard code one of your post ids for now, we'll make this dynamic later
        const result = await getPost({postId: "602346410afb530705e05e1f"})
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