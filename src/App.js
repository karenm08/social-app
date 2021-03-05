import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PostsPage from './layouts/PostPage'
import PostDetailsPage from './layouts/PostDetailsPage'
import HeaderNavigation from './layouts/HeaderNavigation'
import NewPostPage from './layouts/NewPostPage'
import Login from './layouts/LoginPage'

import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import useLocalStorage from "react-use-localstorage";

export default function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    const user = token ? jwtDecode(token) : null;
    setUser(user);
  }, [token]);

  return (
    <Router>
      <HeaderNavigation user={user} setToken={setToken}></HeaderNavigation>
      <main style={{marginTop: 100}}></main>
      <Switch>
        <Route path="/login">
          <Login setToken={setToken}></Login>
        </Route>
        <Route path="/signOut">
        <Login/>
        </Route>
        <Route path="/profile">
          <p>ID: {user?._id}</p>
          <p>User Name: {user?.username}</p>
        </Route>
        <Route path="/newPost">
          <NewPostPage token={token}/>
        </Route>
        <Route path="/posts/:postId">
          <PostDetailsPage token={token}/>
        </Route>
        <Route path="/">
          <PostsPage/>
        </Route>
      </Switch>
    </Router>
  )
}