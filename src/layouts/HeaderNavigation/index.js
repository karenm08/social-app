import PageHeader from '../../components/PageHeader'

import { useHistory } from "react-router-dom"

export default function HeaderNavigation({user, setToken}) {
  const history = useHistory()
  const signOut = () => {
    // Remove the token from local storage
    setToken("")
    localStorage.clear()
    history.push("/")
  }

  return (<PageHeader
    title="SocialLOL"
    titleClicked={() => history.push("/")}
    // user={{_id: "1"}}
    user={user}
    newPost={() => history.push("/newPost")}
    profile={() => history.push("/profile")}
    login={() => history.push("/login")}
    signOut={signOut}
    // signOut={() => history.push("/signOut")}
    ></PageHeader>)
}