import React, {useState, useEffect} from 'react'
import PostDetails from '../../components/PostDetails'
import { getPost,submitComment } from '../../network'
import { useParams } from "react-router-dom"

export default function PostDetailsPage() {
  const [post, setPost] = useState()
  // So useParams will contain a property postId that contains the data we need
  let { postId } = useParams()

  useEffect(() => {
    (async () => {
        const result = await getPost({postId: postId})
        setPost(result.post)
    })()
  }, [])

  // const submitComment = async data => {
  //   try {
  //     // Create request to api service
  //     const req = await fetch(`/api/posts/${postId}/comments`, {
  //         method: 'POST',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //         // format the data
  //         body: JSON.stringify({
  //           text: data.text
  //       }),
  //     });
  //     const res = await req.json();
  //     // Log success message
  //     console.log(res);                
  //     } catch(err) {
  //     console.error(`ERROR: ${err}`);
  //     }
  // }

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