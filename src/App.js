import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PostsPage from './layouts/PostPage'
import PostDetailsPage from './layouts/PostDetailsPage'
import HeaderNavigation from './layouts/HeaderNavigation'

export default function App() {
  return (
    <Router>
      <HeaderNavigation></HeaderNavigation>
      <main style={{marginTop: 100}}></main>
      <Switch>
        <Route path="/login">
          <p>Login Form</p>
        </Route>
        <Route path="/profile">
          <p>Profile Page</p>
        </Route>
        <Route path="/newPost">
          <p>Create New Post Page</p>
        </Route>
        <Route path="/posts/:postId">
          <PostDetailsPage></PostDetailsPage>
        </Route>
        <Route path="/">
          <PostsPage></PostsPage>
        </Route>
      </Switch>
    </Router>
  )
}