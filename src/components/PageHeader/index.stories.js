import React from 'react'
import Login from './index'
import Logout from './loggedOut'


export default {
    title: 'PageHeader',
    component: Login,
    component: Logout,
  }

  export const LoggedIn = () => <Login/>
  export const LoggedOut = () => <Logout/>