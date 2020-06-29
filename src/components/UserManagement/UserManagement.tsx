import React, { ReactElement, useState } from "react";
import { User, UserCallback } from "../../shared/shared";
import userService from "../../service/user-service";
import UserLi from "./UserLi";
import "./UserManagement.css";

interface Props {
  users: User[];
  onDeleteUser: UserCallback;
  onEditUser: UserCallback;
}

export default function UserManagement({
  users,
  ...rest
}: Props): ReactElement {
    const [searchField, setSearchField] = useState("");
    const filteredArray = users.filter(users => {
        return users.userName
          .toLowerCase()
          .includes(searchField.toLowerCase());
      });
  return (
    <React.Fragment>
        <div><label className="searchLabel" htmlFor="search">Search by Username:</label><input className="search" type="search" onChange={(e)=>setSearchField(e.target.value)}></input></div>
      <div className="divTable">
        <div className="divTableHeading">
          <div className="divTableRow">
            <div className="divTableHead">ID</div>
            <div className="divTableHead">Username</div>
            <div className="divTableHead">Full Name</div>
            <div className="divTableHead">Email</div>
            <div className="divTableHead">Password</div>
            <div className="divTableHead">Phone</div>
            <div className="divTableHead">Adress</div>
            <div className="divTableHead">Role</div>
            <div className="divTableHead">Manage</div>
          </div>
        </div>
        <div className="divTableBody">
          {filteredArray.map((user) => (
            <UserLi user={user} {...rest} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
