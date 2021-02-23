import NewPost from '../../components/NewPost'
import React, {useState, useEffect} from 'react'
export default function NewPostPage() {

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
            // description: "dd",
            description: data.description,
            imageUrl: data.imageUrl,
            type: "jpg",
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
          onClose={onClose} 
          onSubmit={onSubmit}/>
}