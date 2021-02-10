import React from 'react'
import NewPost from './index'
import { actions } from '@storybook/addon-actions'

const fakeUpload = {
  description: "the text typed into the description textarea",
  imageURL: "the text typed into the image url textfield",
  type: "url"
}

export default {
    title: 'NewPost',
    component: NewPost,
  }

  const events = actions({ onSubmit: 'submit clicked' })

  export const Default = () => <NewPost upload={fakeUpload} {...events}/>