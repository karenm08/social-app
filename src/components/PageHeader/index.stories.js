import React from 'react'
import PageHeader from './index'
import Logout from './loggedOut'


export default {
    title: 'PageHeader',
    component: PageHeader,
  }

  export const LoggedIn = () => <PageHeader/>
  export const LoggedOut = () => <Logout/>