import React from 'react'
import Login from './index'
import { actions } from '@storybook/addon-actions'

const fakeSignUp = {
  email: "",
  password: "",
  type: "signUp",
  username:""
}

const fakelogin = {
  password: "",
  type: "login",
  username:""
}

export default {
    title: 'Login',
    component: Login,
  }

  const events = actions({ onSubmit: 'submit clicked' , onClose: 'close clicked'})

  export const Default = () => <Login signUp={fakeSignUp} login={fakelogin} {...events}/>