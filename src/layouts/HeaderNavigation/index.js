import PageHeader from '../../components/PageHeader'

import { useHistory } from "react-router-dom"

export default function HeaderNavigation() {
  const history = useHistory()

  return (<PageHeader
    title="Social Something"
    titleClicked={() => history.push("/")}
    user={{_id: "1"}}
    newPost={() => history.push("/newPost")}
    profile={() => history.push("/profile")}
    login={() => history.push("/login")}
    ></PageHeader>)
}