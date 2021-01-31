import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

import { auth } from "../../../../firebase/index";

import { UserContext } from "../../../../firebase/UserProvider";

const UserActions = () => {
  const [visible, setVisible] = useState(false);
  const user = useContext(UserContext);

  let userInfo = {};

  if (user) {
    userInfo = {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL
    };
  } else {
    userInfo = {
      email: null,
      displayName: null,
      uid: null,
      photoURL: null
    };
  }

  const toggleUserActions = () => {
    setVisible(!visible);
  };

  return (
    <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
      {user && (
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={userInfo.photoURL}
            alt="User Avatar"
            style={{ display: "inline", cursor: "pointer" }}
          />{" "}
          <span
            style={{ display: "inline", cursor: "pointer" }}
            className="d-none d-md-inline-block"
          >
            {userInfo.displayName}
          </span>
        </DropdownToggle>
      )}
      <Collapse tag={DropdownMenu} right small open={visible}>
        <DropdownItem tag={Link} to="user-profile">
          <i className="material-icons">&#xE7FD;</i> Profile
        </DropdownItem>
        <DropdownItem tag={Link} to="edit-user-profile">
          <i className="material-icons">&#xE8B8;</i> Edit Profile
        </DropdownItem>
        <DropdownItem tag={Link} to="file-manager-list">
          <i className="material-icons">&#xE2C7;</i> Files
        </DropdownItem>
        <DropdownItem tag={Link} to="transaction-history">
          <i className="material-icons">&#xE896;</i> Transactions
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          tag={Link}
          to="/"
          className="text-danger"
          onClick={() => {
            auth.signOut();
          }}
        >
          <i className="material-icons text-danger">&#xE879;</i> Logout
        </DropdownItem>
      </Collapse>
    </NavItem>
  );
};

/*export class UserActions extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      user: this.context,
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  componentDidMount() {
    //const user = this.context
    //console.log(user)
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={user.photoURL}
            alt="User Avatar"
            style={{ display: "inline", cursor: "pointer" }}
          />{" "}
          <span
            style={{ display: "inline", cursor: "pointer" }}
            className="d-none d-md-inline-block"
          >
            Charles Liu
          </span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
*/

export default UserActions;
