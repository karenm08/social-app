import { useEffect, useState } from 'react'
import { getPosts } from '../../network'
import { useHistory } from "react-router-dom"
import Post from '../../components/Post'

export default function PostsPage() {
  const [posts, setPosts] = useState([])
  const history = useHistory()

  useEffect(() => {
    (async () => {
      const result = await getPosts()
      setPosts(result.posts)
    })()
  }, [])

  const likeClicked = async data => {
    console.log("like clicked", data)
  }
  const cardClicked = async data => {
    history.push(`/posts/${data.postId}`)
  }
  const commentClicked = async data => {
    history.push(`/posts/${data.postId}`)
  }

  return (
    <div>
    {
      posts.map(post => (
        <Post 
        key={post._id} 
        post={post}
        likeClicked={likeClicked}
        cardClicked={cardClicked}
        commentClicked={commentClicked}
        ></Post>
      ))
    }
    </div>
  )
}