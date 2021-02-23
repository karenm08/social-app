import Login from '../../components/Login'
import React, {useState, useEffect} from 'react'

export default function LoginPage() {
    const onClose = async data => {
        console.log("close Clicked", data)
      }

      const onSubmit = async data => {
        console.log("submit Clicked", data)
      }

  return <Login 
          onClose={onClose} 
          onSubmit={onSubmit}/>
}