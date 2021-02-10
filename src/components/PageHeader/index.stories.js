import React from 'react'
import LoginPage from './index'
import LogoutPage from './loggedOut'
import { actions } from '@storybook/addon-actions'

export default {
    title: 'PageHeader',
    component: LoginPage,
    component: LogoutPage,
  }

  const events = actions({ onSearch: 'search clicked' })

  export const LoggedIn = () => <LoginPage {...events}/>
  export const LoggedOut = () => <LogoutPage {...events}/>

//   <PageHeader 
// onTitleClicked={funciton} 
// onSignOutClicked={function}
// onNewPostClicked={function}
// onProfileClicked={function}
// onSearch={function}
// onLoginClicked={function}
// user={the logged in user object}
// ></PageHeader>
