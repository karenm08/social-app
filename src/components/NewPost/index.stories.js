import React from 'react'
import NewPost from './index'
import { actions } from '@storybook/addon-actions'

const fakeImageUpload = {
  description: "the text typed into the description textarea",
  imageURL: "the text typed into the image url textfield",
  type: "url"
}

const fakeFileUpload = {
  description: "the text typed into the description textarea",
  file: "",
  type: "file"
}

export default {
    title: 'NewPost',
    component: NewPost,
  }

  const events = actions({ onSubmit: 'submit clicked' })

  export const Default = () => <NewPost imgUpload={fakeImageUpload} fileUpload={fakeFileUpload} {...events}/>