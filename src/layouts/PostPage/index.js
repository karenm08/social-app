import { useEffect, useState } from 'react'
import { getPosts } from '../../network'

import Post from '../../components/Post'

export default function PostsPage() {
  const [posts, setPosts] = useState([])

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
    console.log("card clicked", data)
  }
  const commentClicked = async data => {
    console.log("comment clicked", data)
  }

  return (
    <div>
    {
      posts.map(post => (
        <Post 
        key={post.id} 
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