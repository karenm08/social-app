import NewPost from '../../components/NewPost'
import React, {useState, useEffect} from 'react'
import { onSubmitPost } from "../../network"

export default function NewPostPage({token}) {

  const onClose = async data => {
    console.log("close Clicked", data)
  }

  return <NewPost 
          onClose={onClose} 
          onSubmit={onSubmitPost}
          token={token}/>
}