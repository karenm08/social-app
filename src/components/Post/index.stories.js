import React from 'react'
import Post from './index'
import { actions } from '@storybook/addon-actions'


const fakePost = {
  id: "post1",
  imageUrl: "https://i.imgur.com/aVqLAG7.png",
  description: "It's in the shed",
  liked: false,
  totalLikes: 200,
  totalComments: 20,
  user: {
    id: "user1",
    username: "AJ"
  }
}

export default {
  title: 'Post',
  component: Post,
}

const events = actions({ cardClicked: 'card clicked', likeClicked: 'like clicked', commentClicked: 'comment clicked' })

export const Default = () => (
    <Post post={{...fakePost, liked: false}} {...events}/>
  )
  export const Liked = () => (
    <Post post={{...fakePost, liked: true}} {...events}/>
  )