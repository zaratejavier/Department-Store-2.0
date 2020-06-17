import React from "react"
import {Link,} from "react-router-dom"
import {Menu,} from "semantic-ui-react"

const NavBar = () => (
  <Menu>
    <Link to ="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/Deparments">
      <Menu.Item>
        Deparments
      </Menu.Item>
    </Link>
  </Menu>
)

export default NavBar