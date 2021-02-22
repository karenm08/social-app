import NewPost from '../../components/NewPost'
import React, {useState, useEffect} from 'react'
export default function HeaderNavigation() {

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

  const onSubmit = async data => {
    try {
      // Create request to api service
      const req = await fetch('/api/posts', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // format the data
          body: JSON.stringify({
            description: data.description,
            imageUrl: data.imageUrl,
            type: "jpeg",
        }),
      });
      const res = await req.json();
      // Log success message
      console.log(res);                
      } catch(err) {
      console.error(`ERROR: ${err}`);
      }
  }

  const onClose = async data => {
    console.log("close Clicked", data)
  }

  return <NewPost 
          imgUpload={fakeImageUpload} 
          fileUpload={fakeFileUpload}
          onClose={onClose} 
          onSubmit={onSubmit}/>
}